// projects/ui/src/lib/foundations/motion/transition.ts

import { MOTION_DURATION } from './duration';
import { MOTION_EASING } from './easing';

export const TRANSITIONS = {
  fast: `all ${MOTION_DURATION.fast} ${MOTION_EASING.easeOut}`,
  normal: `all ${MOTION_DURATION.normal} ${MOTION_EASING.easeOut}`,
  slow: `all ${MOTION_DURATION.slow} ${MOTION_EASING.easeOut}`,
} as const;

export const COMPONENT_TRANSITIONS = {
  hover: 'fast',
  focus: 'fast',
  expand: 'normal',
  collapse: 'normal',
  dialogOpen: 'slow',
  dialogClose: 'fast',
} as const;
