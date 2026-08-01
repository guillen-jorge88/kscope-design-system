// projects/ui/src/lib/atoms/input/models/input.tokens.ts

import { SEMANTIC_SIZING } from '../../../tokens/semantic/sizing';

export const INPUT_TOKENS = {
  size: {
    xs: {
      height: '28px',
      padding: '0 8px',
      fontSize: '12px',
    },
    sm: {
      height: '32px',
      padding: '0 10px',
      fontSize: '13px',
    },
    md: {
      height: SEMANTIC_SIZING.control.sm, // 36px/40px
      padding: '0 12px',
      fontSize: '14px',
    },
    lg: {
      height: SEMANTIC_SIZING.control.md, // 44px
      padding: '0 16px',
      fontSize: '16px',
    },
    xl: {
      height: SEMANTIC_SIZING.control.lg, // 48px/52px
      padding: '0 20px',
      fontSize: '18px',
    },
  },
} as const;
