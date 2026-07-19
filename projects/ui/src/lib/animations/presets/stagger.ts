import { StaggerOptionsI } from '../animation.types';
import { getStaggerDelay } from '../animation.utils';

export function createStaggerStyle(index: number, options: StaggerOptionsI = {}) {
  const delay = getStaggerDelay(index, options);
  return {
    'animation-delay': delay,
    'transition-delay': delay,
  };
}
