// projects/ui/src/lib/atoms/textarea/models/textarea.interface.ts

import { InputSignal, InputSignalWithTransform, OutputEmitterRef } from '@angular/core';
import { ComponentSizeT } from '../../../types';
import { TextareaResize, TextareaVariant, TextareaStatus } from './textarea.types';

export interface TextareaProps {
  id: InputSignal<string>;
  name: InputSignal<string>;
  size: InputSignalWithTransform<ComponentSizeT, ComponentSizeT>;
  variant: InputSignalWithTransform<TextareaVariant, TextareaVariant>;
  status: InputSignalWithTransform<TextareaStatus, TextareaStatus>;
  resize: InputSignalWithTransform<TextareaResize, TextareaResize>;
  rows: InputSignalWithTransform<number, number | string>;
  maxlength: InputSignalWithTransform<number | null, number | string | null>;
  showCharacterCount: InputSignalWithTransform<boolean, boolean>;
  placeholder: InputSignalWithTransform<string, string>;
  disabled: InputSignalWithTransform<boolean, boolean>;
  readonly: InputSignalWithTransform<boolean, boolean>;
  required: InputSignalWithTransform<boolean, boolean>;

  // Outputs
  valueChange: OutputEmitterRef<string>;
  focusEvent: OutputEmitterRef<FocusEvent>;
  blurEvent: OutputEmitterRef<FocusEvent>;
}
