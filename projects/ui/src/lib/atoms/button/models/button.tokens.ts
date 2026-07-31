// projects/ui/src/lib/atoms/button/models/button.tokens.ts
import { SEMANTIC_SIZING } from '../../../tokens/semantic/sizing';

export const BUTTON_TOKENS = {
  size: {
    xs: {
      height: '28px',
      padding: '0 8px',
      fontSize: '12px',
      gap: '4px',
    },
    sm: {
      height: '32px',
      padding: '0 12px',
      fontSize: '13px',
      gap: '6px',
    },
    md: {
      height: SEMANTIC_SIZING.control.sm, // 36px/40px según tokens W3C
      padding: '0 16px',
      fontSize: '14px',
      gap: '8px',
    },
    lg: {
      height: SEMANTIC_SIZING.control.md, // 44px
      padding: '0 20px',
      fontSize: '16px',
      gap: '10px',
    },
    xl: {
      height: SEMANTIC_SIZING.control.lg, // 48px/52px
      padding: '0 24px',
      fontSize: '18px',
      gap: '12px',
    },
  },
  radius: {
    rounded: '6px',
    pill: '9999px',
    square: '0px',
  },
} as const;
