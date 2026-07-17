// projects/ui/src/lib/tokens/semantic/breakpoints.ts

import { BREAKPOINT_PRIMITIVES } from '../primitives/breakpoints/breakpoints';

export const SEMANTIC_BREAKPOINTS = {
  mobile: BREAKPOINT_PRIMITIVES.xs,
  tablet: BREAKPOINT_PRIMITIVES.md,
  desktop: BREAKPOINT_PRIMITIVES.lg,
  wide: BREAKPOINT_PRIMITIVES.xxl,
} as const;
