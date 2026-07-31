// projects/ui/src/lib/atoms/button/models/button.interface.ts
import { InputSignal, InputSignalWithTransform } from '@angular/core';
import { ComponentSizeT, ColorT } from '../../../types';
import { ButtonVariant, ButtonType, ButtonShape } from './button.types';

export interface ButtonProps {
  variant: InputSignalWithTransform<ButtonVariant, ButtonVariant>;
  size: InputSignalWithTransform<ComponentSizeT, ComponentSizeT>;
  color: InputSignalWithTransform<ColorT, ColorT>;
  type: InputSignalWithTransform<ButtonType, ButtonType>;
  shape: InputSignalWithTransform<ButtonShape, ButtonShape>;
  disabled: InputSignalWithTransform<boolean, boolean>;
  loading: InputSignalWithTransform<boolean, boolean>;
  fullWidth: InputSignalWithTransform<boolean, boolean>;
  leftIcon: InputSignalWithTransform<string, string>;
  rightIcon: InputSignalWithTransform<string, string>;
  ariaLabel: InputSignalWithTransform<string, string>;
}
