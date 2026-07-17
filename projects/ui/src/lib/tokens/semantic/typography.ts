// projects/ui/src/lib/tokens/semantic/typography.ts

import { TYPOGRAPHY_PRIMITIVES } from '../primitives/typography/typography';

export const SEMANTIC_TYPOGRAPHY = {
  family: {
    body: TYPOGRAPHY_PRIMITIVES.fontFamily.sans,
    heading: TYPOGRAPHY_PRIMITIVES.fontFamily.sans,
    code: TYPOGRAPHY_PRIMITIVES.fontFamily.mono,
  },
  size: {
    body: TYPOGRAPHY_PRIMITIVES.fontSize.base,
    bodySmall: TYPOGRAPHY_PRIMITIVES.fontSize.sm,
    caption: TYPOGRAPHY_PRIMITIVES.fontSize.xs,
    h1: TYPOGRAPHY_PRIMITIVES.fontSize.display,
    h2: TYPOGRAPHY_PRIMITIVES.fontSize.xxl,
    h3: TYPOGRAPHY_PRIMITIVES.fontSize.xl,
  },
  weight: {
    body: TYPOGRAPHY_PRIMITIVES.fontWeight.regular,
    bodyBold: TYPOGRAPHY_PRIMITIVES.fontWeight.bold,
    heading: TYPOGRAPHY_PRIMITIVES.fontWeight.semibold,
  },
} as const;
