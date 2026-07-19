export function toCamelCaseUtils(text: string): string {
  if (!text) return '';
  return text.toLowerCase().replace(/[-_]([a-z0-9])/g, (_, char) => char.toUpperCase());
}
