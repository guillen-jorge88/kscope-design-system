// projects/ui/src/lib/foundations/opacity/opacity.ts

export const OPACITY = {
  transparent: 0,
  disabled: 0.38,
  subtle: 0.64,
  medium: 0.72,
  visible: 0.88,
  solid: 1,
} as const;

export const COMPONENT_OPACITY = {
  enabled: OPACITY.solid,
  disabled: OPACITY.disabled,
  overlay: OPACITY.visible,
  secondaryIcon: OPACITY.medium,
  placeholder: OPACITY.subtle,
} as const;
