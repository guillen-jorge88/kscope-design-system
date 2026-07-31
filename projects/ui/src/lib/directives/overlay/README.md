# 🪟 Overlays Directives (`directives/overlays`)

El submódulo de **Directivas de Overlays** de **Kscope Design System** proporciona la capa de abstracción declarativa para la gestión de **elementos flotantes, paneles superpuestos, diálogos, paneles laterales y menús contextuales**.

Diseñado para desacoplar los desencadenantes (_triggers_) y los puntos de anclaje de la lógica de presentación visual de componentes complejos como `Dialog`, `Drawer`, `Popover`, `ContextMenu`, `Tooltip` y `Dropdown`.

---

## 📌 Principios de Ingeniería

1. **Standalone & Zero-Dep:** Módulos 100% `standalone: true` sin dependencias externas innecesarias.
2. **Signals Native:** Basadas en la API reactiva moderna de Angular (`input()`, `output()`) para una comunicación limpia entre disparadores y componentes contenedores.
3. **Decoupled Architecture:** Separa de forma estricta los elementos disparadores (_triggers_) y los puntos de anclaje de la renderización del contenido superpuesto.
4. **Type-Safe:** Estricto manejo de tipos de Angular y eventos nativos sin uso de `any`.

---

## 📂 Estructura del Submódulo

```text
projects/ui/src/lib/directives/overlays/
├── overlay-anchor.directive.ts     # Punto de anclaje posicional para elementos flotantes
├── dialog.directive.ts             # Control y disparo declarativo de diálogos modales
├── drawer.directive.ts             # Disparador y configuración de paneles deslizables (Off-canvas)
├── popover.directive.ts            # Disparador y posicionamiento preferido de popovers
├── context-menu.directive.ts       # Captura de evento contextmenu y cálculo de coordenadas
├── README.md                       # Documentación técnica del submódulo
└── index.ts                        # Public Export Barrier
```

---

## 🛠️ Catálogo de Directivas y Ejemplos de Uso

### 1. `KscopeOverlayAnchorDirective`

Marca un elemento HTML nativo como el punto de referencia o anclaje visual (`ElementRef`) para el cálculo posicional de popovers, menús desplegables o tooltips.

- **Selector:** `[kscopeOverlayAnchor]`

```html
<button kscopeOverlayAnchor #anchor="kscopeOverlayAnchor">Elemento de Referencia</button>
```

---

### 2. `KscopeDialogDirective`

Convierte cualquier elemento en un disparador (_trigger_) de apertura para diálogos modales identificados por un ID único.

- **Selector:** `[kscopeDialogTrigger]`
- **Inputs:**
  - `kscopeDialogTrigger`: `string` (**Required**) — ID del diálogo a abrir.
- **Outputs:**
  - `openDialog`: `output<string>()` — Emite el ID objetivo al hacer clic.

```html
<button kscopeDialogTrigger="confirm-delete-dialog" (openDialog)="handleOpenDialog($event)">
  Eliminar Registro
</button>
```

---

### 3. `KscopeDrawerDirective`

Actúa como disparador declarativo para paneles laterales (_Drawers / Off-canvas_), especificando el lado de apertura.

- **Selector:** `[kscopeDrawerTrigger]`
- **Inputs:**
  - `kscopeDrawerPosition`: `'left' | 'right'` (default: `'right'`) — Lado de despliegue.
- **Outputs:**
  - `toggleDrawer`: `output<'left' | 'right'>()` — Emite la posición solicitada al hacer clic.

```html
<button kscopeDrawerTrigger kscopeDrawerPosition="left" (toggleDrawer)="openFiltersDrawer($event)">
  Abrir Filtros
</button>
```

---

### 4. `KscopePopoverDirective`

Relaciona un elemento disparador con la intención de abrir un panel flotante (_Popover_) indicando una preferencia de ubicación visual.

- **Selector:** `[kscopePopoverTrigger]`
- **Inputs:**
  - `kscopePopoverPlacement`: `'top' | 'bottom' | 'left' | 'right'` (default: `'bottom'`) — Posición preferida.
- **Outputs:**
  - `popoverToggled`: `output<{ origin: HTMLElement; placement: KscopePopoverPlacement }>()` — Emite el elemento origen y la posición solicitada.

```html
<button
  kscopePopoverTrigger
  kscopePopoverPlacement="top"
  (popoverToggled)="togglePopoverPanel($event)"
>
  Opciones Rápidas
</button>
```

---

### 5. `KscopeContextMenuDirective`

Intercepta el evento nativo de clic derecho (`contextmenu`), previene la apertura del menú contextual predeterminado del navegador y emite las coordenadas exactas `(x, y)` del puntero.

- **Selector:** `[kscopeContextMenuTrigger]`
- **Inputs:**
  - `kscopeContextMenuTrigger`: `boolean` (default: `true`) — Habilita/deshabilita la captura del clic derecho.
- **Outputs:**
  - `contextMenuOpened`: `output<KscopeContextMenuPosition>()` — Emite `{ x: number, y: number }`.

```html
<div [kscopeContextMenuTrigger]="true" (contextMenuOpened)="openCustomContextMenu($event)">
  Haz clic derecho sobre esta área
</div>
```

---

## 🚀 Integración mediante `hostDirectives`

Puedes asociar estas directivas a nivel de componentes atómicos para delegar la interacción de trigger sin ensuciar el marcado del usuario:

```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { KscopePopoverDirective, KscopeOverlayAnchorDirective } from '../directives/overlays';

@Component({
  selector: 'kscope-popover-button',
  standalone: true,
  template: `<button class="kscope-btn"><ng-content></ng-content></button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [KscopePopoverDirective, KscopeOverlayAnchorDirective],
})
export class KscopePopoverButtonComponent {}
```

---

## 📦 Exportación del Módulo

Todas las directivas se exportan limpiamente a través del punto de entrada del submódulo:

```typescript
import {
  KscopeOverlayAnchorDirective,
  KscopeDialogDirective,
  KscopeDrawerDirective,
  KscopePopoverDirective,
  KscopeContextMenuDirective,
} from '@kscope/ui';
```
