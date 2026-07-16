// projects/ui/src/lib/foundations/motion/animation.types.ts

import { MOTION_DURATION } from './duration';
import { MOTION_EASING } from './easing';
import { COMPONENT_TRANSITIONS } from './transition';

export type MotionDuration = keyof typeof MOTION_DURATION;
export type MotionEasing = keyof typeof MOTION_EASING;
export type ComponentTransitionToken = keyof typeof COMPONENT_TRANSITIONS;
