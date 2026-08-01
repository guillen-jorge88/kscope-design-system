// projects/ui/src/lib/atoms/input/models/input.interface.ts

import { InputSignal, InputSignalWithTransform, OutputEmitterRef } from '@angular/core';
import { ComponentSizeT } from '../../../types';
import { InputType, InputVariant, InputStatus } from './input.types';

export interface InputProps {
  id: InputSignal<string>;
  name: InputSignal<string>;
  type: InputSignalWithTransform<InputType, InputType>;
  size: InputSignalWithTransform<ComponentSizeT, ComponentSizeT>;
  variant: InputSignalWithTransform<InputVariant, InputVariant>;
  status: InputSignalWithTransform<InputStatus, InputStatus>;
  placeholder: InputSignalWithTransform<string, string>;
  disabled: InputSignalWithTransform<boolean, boolean>;
  readonly: InputSignalWithTransform<boolean, boolean>;
  required: InputSignalWithTransform<boolean, boolean>;
  leftIcon: InputSignalWithTransform<string, string>;
  rightIcon: InputSignalWithTransform<string, string>;
  prefixText: InputSignalWithTransform<string, string>;
  suffixText: InputSignalWithTransform<string, string>;
  clearable: InputSignalWithTransform<boolean, boolean>;

  // Outputs
  valueChange: OutputEmitterRef<string>;
  focusEvent: OutputEmitterRef<FocusEvent>;
  blurEvent: OutputEmitterRef<FocusEvent>;
}
