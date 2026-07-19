export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  HEX_COLOR: /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/,
  CSS_VAR: /^--/,
} as const;
