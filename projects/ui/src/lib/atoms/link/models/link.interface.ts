// projects/ui/src/lib/atoms/link/models/link.interface.ts
import { InputSignalWithTransform } from '@angular/core';
import { ComponentSizeT, ColorT } from '../../../types';
import { LinkTarget, LinkUnderline, LinkWeight } from './link.types';

export interface LinkProps {
  href: InputSignalWithTransform<string, string>;
  target: InputSignalWithTransform<LinkTarget, LinkTarget>;
  size: InputSignalWithTransform<ComponentSizeT, ComponentSizeT>;
  color: InputSignalWithTransform<ColorT, ColorT>;
  underline: InputSignalWithTransform<LinkUnderline, LinkUnderline>;
  weight: InputSignalWithTransform<LinkWeight, LinkWeight>;
  disabled: InputSignalWithTransform<boolean, boolean>;
  external: InputSignalWithTransform<boolean, boolean>;
  leftIcon: InputSignalWithTransform<string, string>;
  rightIcon: InputSignalWithTransform<string, string>;
  ariaLabel: InputSignalWithTransform<string, string>;
}
