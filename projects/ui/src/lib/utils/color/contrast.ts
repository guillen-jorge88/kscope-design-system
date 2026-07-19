import { hexToRgbUtils } from './rgb';

export function getContrastColorUtils(hex: string): '#FFFFFF' | '#000000' {
  const rgb = hexToRgbUtils(hex);
  if (!rgb) return '#000000';
  // Fórmula YIQ de luminancia estándar de la industria
  const yiq = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#FFFFFF';
}
