import type { IPhoto } from '@/components/photo/interfaces/IPhoto';
import type { ElementSize } from '@/types/ElementSize';

export interface ISliderProps {
  photos: IPhoto[];
  photosSize: ElementSize;
}
