export function isHexUtils(value: string): boolean {
  return /^#([A-Fa-f0-9]{3}){1,2}$/.test(value);
}
