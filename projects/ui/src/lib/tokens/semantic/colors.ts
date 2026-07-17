// projects/ui/src/lib/tokens/semantic/colors.ts

import { COLOR_PRIMITIVES } from '../primitives/colors/colors';

export const SEMANTIC_COLORS = {
  brand: {
    primary: COLOR_PRIMITIVES.blue500,
    primaryHover: COLOR_PRIMITIVES.blue600,
  },
  ui: {
    background: COLOR_PRIMITIVES.gray50,
    surface: COLOR_PRIMITIVES.white,
    border: COLOR_PRIMITIVES.gray200,
  },
  text: {
    primary: COLOR_PRIMITIVES.gray900,
    secondary: COLOR_PRIMITIVES.gray700,
    inverse: COLOR_PRIMITIVES.white,
  },
  feedback: {
    success: COLOR_PRIMITIVES.green500,
    warning: COLOR_PRIMITIVES.yellow500,
    error: COLOR_PRIMITIVES.red500,
  },
} as const;
