export const rotateStyles = {
  enter: {
    opacity: 1,
    transform: 'rotate(0) scale(1)',
  },
  leave: {
    opacity: 0,
    transform: 'rotate(8deg) scale(.95)',
  },
} as const;
