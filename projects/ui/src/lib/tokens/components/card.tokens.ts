// projects/ui/src/lib/tokens/components/card.tokens.ts

import { SEMANTIC_COLORS } from '../semantic/colors';
import { SEMANTIC_SPACING } from '../semantic/spacing';
import { SEMANTIC_RADIUS } from '../semantic/radius';
import { ELEVATION_PRIMITIVES } from '../primitives/elevation/elevation';

export const CARD_TOKENS = {
  background: SEMANTIC_COLORS.ui.surface,
  border: SEMANTIC_COLORS.ui.border,
  radius: SEMANTIC_RADIUS.container,
  padding: SEMANTIC_SPACING.layout.relaxed, // 24px
  shadow: ELEVATION_PRIMITIVES[2],
} as const;
