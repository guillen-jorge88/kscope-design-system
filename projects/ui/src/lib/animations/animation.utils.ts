import { StaggerOptionsI } from "./animation.types";

export function createAnimationStyles(
  styles: Record<string, string | number>,
): Record<string, string | number> {
  return {
    ...styles,
  } as const;
}


export function shouldReduceMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function getStaggerDelay(index: number, options: StaggerOptionsI = {}): string {
  const { delayStep = 50, baseDelay = 0 } = options;
  if (shouldReduceMotion()) return '0ms';
  return `${baseDelay + (index * delayStep)}ms`;
}

export function getSafeDuration(durationMs: number): number {
  if (shouldReduceMotion()) return 0;
  return durationMs;
}