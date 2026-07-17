// projects/ui/src/lib/tokens/semantic/radius.ts

import { RADIUS_PRIMITIVES } from '../primitives/radius/radius';

export const SEMANTIC_RADIUS = {
  none: RADIUS_PRIMITIVES.none,
  control: RADIUS_PRIMITIVES.md, // Para inputs y botones (8px)
  container: RADIUS_PRIMITIVES.lg, // Para tarjetas o modales (12px)
  badge: RADIUS_PRIMITIVES.full, // Redondeado completo (9999px)
} as const;
