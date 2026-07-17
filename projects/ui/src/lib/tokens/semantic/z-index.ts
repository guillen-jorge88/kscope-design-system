// projects/ui/src/lib/tokens/semantic/z-index.ts

import { Z_INDEX_PRIMITIVES } from '../primitives/z-index/z-index';

export const SEMANTIC_Z_INDEX = {
  deep: Z_INDEX_PRIMITIVES.base,
  default: Z_INDEX_PRIMITIVES.raised,
  dropdown: Z_INDEX_PRIMITIVES.dropdown,
  navigation: Z_INDEX_PRIMITIVES.sticky,
  scrim: Z_INDEX_PRIMITIVES.overlay,
  popup: Z_INDEX_PRIMITIVES.modal,
  alert: Z_INDEX_PRIMITIVES.toast,
} as const;
