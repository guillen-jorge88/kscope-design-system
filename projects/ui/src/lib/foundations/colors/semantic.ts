// projects/ui/src/lib/foundations/colors/semantic.ts
import { PRIMARY, SECONDARY, SUCCESS, WARNING, DANGER, NEUTRAL } from './palette';

export const SEMANTIC_COLORS = {
  text: {
    primary: NEUTRAL[900],
    secondary: SECONDARY[700],
    muted: NEUTRAL[500],
    inverse: NEUTRAL[50],
    danger: DANGER[600],
  },
  background: {
    primary: NEUTRAL[50],
    secondary: NEUTRAL[100],
    inverse: NEUTRAL[900],
    brand: PRIMARY[500],
  },
  border: {
    default: NEUTRAL[200],
    focused: PRIMARY[500],
    invalid: DANGER[500],
  },
  surface: {
    default: '#FFFFFF',
    overlay: NEUTRAL[50],
    neutral: NEUTRAL[100],
    brand: PRIMARY[50],
  },
  icon: {
    default: SECONDARY[600],
    active: PRIMARY[500],
    success: SUCCESS[500],
    warning: WARNING[500],
    danger: DANGER[500],
  },
} as const;
