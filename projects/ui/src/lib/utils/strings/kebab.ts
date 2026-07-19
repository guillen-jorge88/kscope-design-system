export function toKebabCaseUtils(text: string): string {
  if (!text) return '';
  return text
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}
