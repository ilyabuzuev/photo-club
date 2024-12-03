import type { ElementSize } from '@/types/ElementSize';
import type { ElementStyle } from '@/types/ElementStyle';

export interface IButtonProps {
  size?: ElementSize;
  label?: string;
  buttonStyle?: ElementStyle;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}
