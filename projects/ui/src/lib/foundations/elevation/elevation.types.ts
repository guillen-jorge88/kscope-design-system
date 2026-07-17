// projects/ui/src/lib/foundations/elevation/elevation.types.ts

import { SHADOWS, COMPONENT_ELEVATION } from './shadows';

export type ElevationLevel = keyof typeof SHADOWS;
export type ComponentElevationToken = keyof typeof COMPONENT_ELEVATION;
