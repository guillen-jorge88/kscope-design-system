export const slideDownStyles = {
  enter: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  leave: {
    opacity: 0,
    transform: 'translateY(-12px)',
  },
} as const;
