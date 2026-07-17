// projects/ui/src/lib/tokens/components/input.tokens.ts

import { SEMANTIC_COLORS } from '../semantic/colors';
import { SEMANTIC_SPACING } from '../semantic/spacing';
import { SEMANTIC_RADIUS } from '../semantic/radius';

export const INPUT_TOKENS = {
  background: SEMANTIC_COLORS.ui.surface,
  border: SEMANTIC_COLORS.ui.border,
  borderFocus: SEMANTIC_COLORS.brand.primary,
  radius: SEMANTIC_RADIUS.control,
  paddingX: SEMANTIC_SPACING.layout.medium,
  paddingY: SEMANTIC_SPACING.layout.compact,
  textColor: SEMANTIC_COLORS.text.primary,
} as const;
