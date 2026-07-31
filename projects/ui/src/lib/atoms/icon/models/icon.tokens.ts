// projects/ui/src/lib/atoms/icon/icon.tokens.ts
import { SEMANTIC_SIZING } from '../../../tokens/semantic/sizing';

export const ICON_TOKENS = {
  size: {
    xs: '16px',
    sm: '20px',
    md: SEMANTIC_SIZING.control.sm,
    lg: SEMANTIC_SIZING.control.md,
    xl: SEMANTIC_SIZING.control.lg,
  },
  stroke: 2,
  transition: 'fast',
} as const;
