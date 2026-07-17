// projects/ui/src/lib/tokens/semantic/opacity.ts

import { OPACITY_PRIMITIVES } from '../primitives/opacity/opacity';

export const SEMANTIC_OPACITY = {
  transparent: OPACITY_PRIMITIVES[0],
  disabled: OPACITY_PRIMITIVES[38],
  placeholder: OPACITY_PRIMITIVES[64],
  muted: OPACITY_PRIMITIVES[72],
  overlay: OPACITY_PRIMITIVES[88],
  solid: OPACITY_PRIMITIVES[100],
} as const;
