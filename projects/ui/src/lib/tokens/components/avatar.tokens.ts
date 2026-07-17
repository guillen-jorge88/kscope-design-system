// projects/ui/src/lib/tokens/components/avatar.tokens.ts

import { SEMANTIC_COLORS } from '../semantic/colors';
import { SEMANTIC_SIZING } from '../semantic/sizing';
import { RADIUS_PRIMITIVES } from '../primitives/radius/radius';

export const AVATAR_TOKENS = {
  size: {
    sm: SEMANTIC_SIZING.avatar.sm,
    md: SEMANTIC_SIZING.avatar.md,
    lg: SEMANTIC_SIZING.avatar.lg,
  },
  radius: RADIUS_PRIMITIVES.full,
  backgroundDefault: SEMANTIC_COLORS.ui.border,
  textColor: SEMANTIC_COLORS.text.secondary,
} as const;
