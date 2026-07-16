// projects/ui/src/lib/foundations/typography/typography.styles.ts
import { FONT_FAMILIES } from './families';
import { FONT_SIZES } from './sizes';
import { FONT_WEIGHTS } from './weights';
import { LINE_HEIGHTS } from './line-heights';
import { LETTER_SPACING } from './letter-spacing';
import { TypographyProperties, TypographyStyleKey } from './typography.types';

export const TYPOGRAPHY_STYLES: Record<TypographyStyleKey, TypographyProperties> = {
  displayLarge: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.displayLg,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.sm,
    letterSpacing: LETTER_SPACING.tighter,
  },
  displayMedium: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.displayMd,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.sm,
    letterSpacing: LETTER_SPACING.tighter,
  },
  displaySmall: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.displaySm,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.sm,
    letterSpacing: LETTER_SPACING.tight,
  },
  headlineLarge: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.xxxl,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.md,
    letterSpacing: LETTER_SPACING.tight,
  },
  headlineMedium: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.md,
    letterSpacing: LETTER_SPACING.tight,
  },
  headlineSmall: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.md,
    letterSpacing: LETTER_SPACING.normal,
  },
  titleLarge: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.lg,
    letterSpacing: LETTER_SPACING.normal,
  },
  titleMedium: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.lg,
    letterSpacing: LETTER_SPACING.wide,
  },
  titleSmall: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.lg,
    letterSpacing: LETTER_SPACING.wide,
  },
  bodyLarge: {
    fontFamily: FONT_FAMILIES.secondary,
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: LINE_HEIGHTS.xl,
    letterSpacing: LETTER_SPACING.normal,
  },
  bodyMedium: {
    fontFamily: FONT_FAMILIES.secondary,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: LINE_HEIGHTS.xl,
    letterSpacing: LETTER_SPACING.normal,
  },
  bodySmall: {
    fontFamily: FONT_FAMILIES.secondary,
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: LINE_HEIGHTS.xl,
    letterSpacing: LETTER_SPACING.wide,
  },
  labelLarge: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.xs,
    letterSpacing: LETTER_SPACING.wider,
  },
  labelMedium: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.xs,
    letterSpacing: LETTER_SPACING.wider,
  },
  labelSmall: {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: '0.625rem', // 10px especial para micro-etiquetas
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.xs,
    letterSpacing: LETTER_SPACING.wider,
  },
};
