// projects/ui/src/lib/tokens/semantic/sizing.ts

import { SIZING_PRIMITIVES } from '../primitives/sizing/sizing';

export const SEMANTIC_SIZING = {
  control: {
    sm: SIZING_PRIMITIVES.sm, // 32px
    md: SIZING_PRIMITIVES.md, // 40px
    lg: SIZING_PRIMITIVES.lg, // 48px
  },
  avatar: {
    sm: SIZING_PRIMITIVES.xs, // 24px
    md: SIZING_PRIMITIVES.md, // 40px
    lg: SIZING_PRIMITIVES.xxl, // 64px
  },
} as const;
