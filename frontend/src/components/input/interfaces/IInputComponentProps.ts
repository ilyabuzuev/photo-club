import type { IValidationRules } from '@/interfaces/IValidationRules';
import type { ElementSize } from '@/types/ElementSize';

export interface IInputComponentProps {
  size?: ElementSize;
  rules?: IValidationRules;
  type?: 'text' | 'password';
}
