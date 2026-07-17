// projects/ui/src/lib/tokens/components/button.tokens.ts

import { SEMANTIC_COLORS } from '../semantic/colors';
import { SEMANTIC_SPACING } from '../semantic/spacing';
import { SEMANTIC_RADIUS } from '../semantic/radius';
import { ELEVATION_PRIMITIVES } from '../primitives/elevation/elevation';

export const BUTTON_TOKENS = {
  solid: {
    background: SEMANTIC_COLORS.brand.primary,
    backgroundHover: SEMANTIC_COLORS.brand.primaryHover,
    color: SEMANTIC_COLORS.text.inverse,
    radius: SEMANTIC_RADIUS.control,
    paddingX: SEMANTIC_SPACING.layout.medium, // 16px
    paddingY: SEMANTIC_SPACING.layout.compact, // 8px
    shadow: ELEVATION_PRIMITIVES[1],
  },
} as const;
