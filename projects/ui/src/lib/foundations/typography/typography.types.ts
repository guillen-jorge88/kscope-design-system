// projects/ui/src/lib/foundations/typography/typography.types.ts

export type TypographyStyleKey =
  | 'displayLarge'
  | 'displayMedium'
  | 'displaySmall'
  | 'headlineLarge'
  | 'headlineMedium'
  | 'headlineSmall'
  | 'titleLarge'
  | 'titleMedium'
  | 'titleSmall'
  | 'bodyLarge'
  | 'bodyMedium'
  | 'bodySmall'
  | 'labelLarge'
  | 'labelMedium'
  | 'labelSmall';

export interface TypographyProperties {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string | number;
  letterSpacing: string;
}
