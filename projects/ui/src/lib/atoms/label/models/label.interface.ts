// projects/ui/src/lib/atoms/label/models/label.interface.ts
import { InputSignal, InputSignalWithTransform } from '@angular/core';
import { ComponentSizeT, ColorT } from '../../../types';
import { LabelWeight, LabelAlignment } from './label.types';

export interface LabelProps {
  forId: InputSignalWithTransform<string, string>;
  required: InputSignalWithTransform<boolean, boolean>;
  disabled: InputSignalWithTransform<boolean, boolean>;
  size: InputSignalWithTransform<ComponentSizeT, ComponentSizeT>;
  color: InputSignalWithTransform<ColorT, ColorT>;
  weight: InputSignalWithTransform<LabelWeight, LabelWeight>;
  align: InputSignalWithTransform<LabelAlignment, LabelAlignment>;
}
