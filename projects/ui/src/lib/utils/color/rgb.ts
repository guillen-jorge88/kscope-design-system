export function hexToRgbUtils(hex: string): { r: number; g: number; b: number } | null {
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) return null;
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split('')
      .map((char) => char + char)
      .join('');
  }
  const num = parseInt(cleanHex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}
