// projects/ui/src/lib/atoms/label/models/label.tokens.ts
import { SEMANTIC_TYPOGRAPHY } from '../../../tokens/semantic/typography';

export const LABEL_TOKENS = {
  size: {
    xs: '11px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '18px',
  },
  weight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;
