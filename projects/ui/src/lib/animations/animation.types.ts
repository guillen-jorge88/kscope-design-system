export type AnimationDirectionT = 'top' | 'bottom' | 'left' | 'right';

export type AnimationStateT = 'enter' | 'leave' | 'idle' | 'running' | 'completed';

export type AnimationSpeedT = 'fast' | 'normal' | 'slow';

export type AnimationPresetT = 'fade' | 'slide' | 'scale' | 'rotate' | 'collapse';

export interface AnimationCallbacksI {
  onStart?: () => void;
  onDone?: () => void;
}

export interface StaggerOptionsI {
  delayStep?: number;
  baseDelay?: number;
}

export interface AnimationConfigI extends AnimationCallbacksI {
  duration?: number;
  easing?: string;
  delay?: number;
}
