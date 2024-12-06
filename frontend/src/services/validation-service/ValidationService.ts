import type { IValidationRules } from '@/interfaces/IValidationRules';

export class ValidationService {
  // private errors: { message: string }[] = [];

  private checkAvailability(text: string): boolean {
    return Boolean(text.length);
  }

  private checkMinLength(text: string, minLength: number): boolean {
    return text.length < minLength;
  }

  private checkMaxLength(text: string, maxLength: number): boolean {
    return text.length > maxLength;
  }

  public validate(text: string, rules: IValidationRules): true | { message: string } {
    // this.errors = [];

    if (rules.isRequired && this.checkAvailability(text) === false) {
      return { message: 'Данное поле обязательно для заполнения' };
    }

    if (rules.minLength && this.checkMinLength(text, rules.minLength) === true) {
      return {
        message: `Длина поля должная быть больше ${rules.minLength}`,
      };
    }

    if (rules.maxLength && !this.checkMaxLength(text, rules.maxLength) === false) {
      return {
        message: `Длина поля должная быть меньше ${rules.maxLength}`,
      };
    }

    return true;
  }
}
