export function classNamesUtils(...classes: unknown[]): string {
  return classes
    .filter((c): c is string | number => typeof c === 'string' || typeof c === 'number')
    .map(String)
    .map((c) => c.trim())
    .filter(Boolean)
    .join(' ');
}
