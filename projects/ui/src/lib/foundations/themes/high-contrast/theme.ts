// projects/ui/src/lib/foundations/themes/high-contrast/theme.ts

import { ThemeConfig } from '../theme.types';

export const HIGH_CONTRAST_THEME: ThemeConfig = {
  background: '#000000',
  surface: '#121212',
  text: '#FFFF00', // Texto amarillo puro sobre fondo negro
  border: '#FFFFFF',
} as const;
