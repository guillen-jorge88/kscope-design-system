// projects/ui/src/lib/tokens/semantic/spacing.ts

import { SPACING_PRIMITIVES } from '../primitives/spacing/spacing';

export const SEMANTIC_SPACING = {
  none: SPACING_PRIMITIVES[0],
  layout: {
    compact: SPACING_PRIMITIVES[2], // 8px
    medium: SPACING_PRIMITIVES[4], // 16px
    relaxed: SPACING_PRIMITIVES[6], // 24px
  },
  gap: {
    small: SPACING_PRIMITIVES[1], // 4px
    medium: SPACING_PRIMITIVES[3], // 12px
  },
} as const;
