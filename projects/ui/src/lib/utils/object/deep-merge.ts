export function deepMergeUtils<T extends Record<string, any>>(
  target: T,
  source: Record<string, any>,
): T {
  const output = { ...target };
  if (typeof target === 'object' && typeof source === 'object') {
    Object.keys(source).forEach((key) => {
      if (typeof source[key] === 'object' && source[key] !== null) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key as keyof T] = deepMergeUtils(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}
