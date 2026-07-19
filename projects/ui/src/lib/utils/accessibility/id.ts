let idCounter = 0;

export function generateUniqueIdUtils(prefix: string = 'ks-id'): string {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}
