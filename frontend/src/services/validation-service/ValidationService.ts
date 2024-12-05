import type { IValidationRules } from '@/interfaces/IValidationRules';

export class ValidationService {
  private readonly errors: { errorMessage: string }[] = [];

  private checkAvailability(text: string): boolean {
    return Boolean(text.length);
  }

  private checkMinLength(text: string, minLength: number): boolean {
    return text.length < minLength;
  }

  private checkMaxLength(text: string, maxLength: number): boolean {
    return text.length > maxLength;
  }

  public validate(text: string, rules: IValidationRules): true | { errorMessage: string }[] {
    if (rules.isRequired && !this.checkAvailability(text)) {
      this.errors.push({ errorMessage: 'Данное поле обязательно для заполнения' });
      // return { errorMessage: 'Данное поле обязательно для заполнения' };
    }

    if (rules.minLength && !this.checkMinLength(text, rules.minLength)) {
      this.errors.push({
        errorMessage: `Минимальная длинна поля должная быть больше ${rules.minLength}`,
      });
      // return { errorMessage: `Минимальная длинна поля должная быть больше ${rules.minLength}` };
    }

    if (rules.maxLength && !this.checkMaxLength(text, rules.maxLength)) {
      this.errors.push({
        errorMessage: `Минимальная длинна поля должная быть меньше ${rules.maxLength}`,
      });
      // return { errorMessage: `Минимальная длинна поля должная быть меньше ${rules.maxLength}` };
    }

    return this.errors.length > 0 ? this.errors : true;
  }
}
