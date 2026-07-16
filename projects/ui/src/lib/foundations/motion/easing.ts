// projects/ui/src/lib/foundations/motion/easing.ts

export const MOTION_EASING = {
  linear: 'linear',
  ease: 'ease',
  easeIn: 'cubic-bezier(.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, .2, 1)',
  easeInOut: 'cubic-bezier(.4, 0, .2, 1)',
  emphasized: 'cubic-bezier(.2, 0, 0, 1)',
} as const;
