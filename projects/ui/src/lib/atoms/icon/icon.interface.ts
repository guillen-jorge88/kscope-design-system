// projects/ui/src/lib/atoms/icon/icon.interface.ts
import { InputSignal, InputSignalWithTransform } from '@angular/core';
import { ComponentSizeT, ColorT } from '../../types';
import { IconLibrary } from './icon.types';

export interface IconProps {
  // input.required retorna un InputSignal puro
  name: InputSignal<string>;

  // Los inputs con valor por defecto retornan InputSignalWithTransform internamente
  library: InputSignalWithTransform<IconLibrary, IconLibrary>;
  size: InputSignalWithTransform<ComponentSizeT, ComponentSizeT>;
  color: InputSignalWithTransform<ColorT, ColorT>;
  filled: InputSignalWithTransform<boolean, boolean>;
  rotate: InputSignalWithTransform<number, number>;
  spin: InputSignalWithTransform<boolean, boolean>;
  ariaLabel: InputSignalWithTransform<string, string>;
}
