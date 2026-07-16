// projects/ui/src/lib/foundations/sizing/sizing.types.ts

import { SIZES } from './sizes';
import { BUTTON_HEIGHTS } from './button-sizes';
import { INPUT_HEIGHTS } from './input-sizes';
import { ICON_SIZES } from './icon-sizes';
import { AVATAR_SIZES } from './avatar-sizes';

export type ComponentSize = keyof typeof SIZES;
export type ButtonSize = keyof typeof BUTTON_HEIGHTS;
export type InputSize = keyof typeof INPUT_HEIGHTS;
export type IconSize = keyof typeof ICON_SIZES;
export type AvatarSize = keyof typeof AVATAR_SIZES;
