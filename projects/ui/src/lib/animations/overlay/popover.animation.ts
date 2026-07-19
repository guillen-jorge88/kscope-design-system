export const popoverStyles = {
    enter: {
        opacity: 1,
        transform: 'translateY(0) scale(1)',
    },
    leave: {
        opacity: 0,
        transform: 'translateY(-4px) scale(.98)',
    },
} as const;