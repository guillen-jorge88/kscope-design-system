// projects/ui/src/lib/foundations/radius/radius.ts

export const RADIUS = {
  none: '0',
  xs: '0.125rem', // 2px
  sm: '0.25rem', // 4px
  md: '0.5rem', // 8px
  lg: '0.75rem', // 12px
  xl: '1rem', // 16px
  '2xl': '1.5rem', // 24px
  full: '9999px',
} as const;

export const COMPONENT_RADIUS = {
  button: 'md',
  input: 'md',
  card: 'lg',
  modal: 'xl',
  avatar: 'full',
  badge: 'full',
} as const;
