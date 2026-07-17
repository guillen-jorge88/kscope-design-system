// projects/ui/src/lib/foundations/themes/theme.types.ts

export type ThemeName = 'light' | 'dark' | 'high-contrast';

export type BrandName = 'default' | 'corporate' | 'banco';

export interface ThemeConfig {
  background: string;
  surface: string;
  text: string;
  border: string;
}

export interface BrandConfig {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
}
