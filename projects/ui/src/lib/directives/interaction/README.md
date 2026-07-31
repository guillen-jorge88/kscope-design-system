# ⚡ Interaction Directives (`directives/interaction`)

El submódulo de **Directivas de Interacción** de **Kscope Design System** proporciona una suite de directivas reactivas y declarativas enfocadas en la **gestión de eventos de usuario, retroalimentación táctil/visual y comportamientos de interacción avanzada**.

Diseñado para enriquecer componentes dinámicos y flotantes como `Dropdown`, `Select`, `Tooltip`, `Menu`, `Modal`, `Popover`, `Button` y tarjetas interactivas.

---

## 📌 Principios de Ingeniería

1. **Standalone & Zero-Dep:** Módulos 100% `standalone: true` sin dependencias externas pesadas.
2. **Signals Native:** Integración moderna con la API de Angular (`input()`, `output()`) para una reactividad fina y Change Detection óptimo (`OnPush`).
3. **Accessibility & Usability:** Mejora la experiencia de usuario (UX) previniendo acciones accidentales y agregando atajos globales de teclado.
4. **Performance & Memory Clean:** Limpieza automática de temporizadores (`setTimeout`) y manejadores de eventos al destruir los elementos.

---

## 📂 Estructura del Submódulo

```text
projects/ui/src/lib/directives/interaction/
├── click-outside.directive.ts          # Detección de clics/toques fuera del elemento
├── prevent-double-click.directive.ts   # Debounce/throttle de clics consecutivos
├── loading.directive.ts                # Estado visual y bloqueo pointer-events en carga
├── keyboard-shortcut.directive.ts      # Atajos de teclado globales (Ctrl+K, Esc, etc.)
├── long-press.directive.ts             # Detección de pulsación prolongada (mouse/touch)
├── hover.directive.ts                  # Control de estado hover con retardos (enter/leave)
├── ripple.directive.ts                 # Efecto visual de onda (ripple) al interactuar
├── README.md                           # Documentación técnica del submódulo
└── index.ts                            # Public Export Barrier
```

---

## 🛠️ Catálogo de Directivas y Ejemplos de Uso

### 1. `KscopeClickOutsideDirective`

Detecta interacciones (`click` o `touchstart`) fuera del elemento contenedor. Esencial para cerrar menús contextuales, selectores o modales.

- **Selector:** `[kscopeClickOutside]`
- **Inputs:**
  - `kscopeClickOutside`: `boolean` (default: `true`) — Habilita/deshabilita la escucha.
- **Outputs:**
  - `kscopeClickOutside`: `output<MouseEvent | TouchEvent>()` — Emite cuando ocurre el clic externo.

```html
<div kscopeClickOutside (kscopeClickOutside)="closeDropdown()">
  <!-- Contenido del Dropdown -->
</div>
```

---

### 2. `KscopePreventDoubleClickDirective`

Bloquea la recepción de múltiples clics consecutivos dentro de un margen de tiempo configurable.

- **Selector:** `[kscopePreventDoubleClick]`
- **Inputs:**
  - `kscopePreventDoubleClickDelay`: `number` (default: `1000`) — Tiempo de bloqueo en milisegundos.
- **Outputs:**
  - `kscopeSingleClick`: `output<MouseEvent>()` — Emite únicamente el primer clic válido.

```html
<button
  kscopePreventDoubleClick
  [kscopePreventDoubleClickDelay]="1500"
  (kscopeSingleClick)="processPayment()"
>
  Pagar
</button>
```

---

### 3. `KscopeLoadingDirective`

Controla la apariencia de carga de un elemento, bloqueando eventos de puntero (`pointer-events: none`) y gestionando atributos accesibles (`aria-busy`).

- **Selector:** `[kscopeLoading]`
- **Inputs:**
  - `kscopeLoading`: `boolean` (default: `false`) — Estado de carga.

```html
<button [kscopeLoading]="isSubmitting()">Guardar Cambios</button>
```

---

### 4. `KscopeKeyboardShortcutDirective`

Intercepta combinaciones de teclas globales en el documento (ej: `ctrl.k`, `escape`, `ctrl.shift.enter`).

- **Selector:** `[kscopeShortcut]`
- **Inputs:**
  - `kscopeShortcut`: `string` (**Required**) — Teclas requeridas separadas por punto.
- **Outputs:**
  - `kscopeShortcutTriggered`: `output<KeyboardEvent>()` — Se emite cuando se presiona la combinación.

```html
<input
  kscopeShortcut="ctrl.k"
  (kscopeShortcutTriggered)="openSearchModal()"
  placeholder="Presiona Ctrl + K para buscar"
/>
```

---

### 5. `KscopeLongPressDirective`

Detecta cuando un usuario mantiene presionado un elemento por un tiempo prolongado (mouse o pantalla táctil).

- **Selector:** `[kscopeLongPress]`
- **Inputs:**
  - `kscopeLongPressDuration`: `number` (default: `500`) — Duración necesaria en milisegundos.
- **Outputs:**
  - `kscopeLongPress`: `output<MouseEvent | TouchEvent>()` — Emite al cumplirse el tiempo.

```html
<button kscopeLongPress [kscopeLongPressDuration]="800" (kscopeLongPress)="openContextMenu($event)">
  Mantén presionado para opciones
</button>
```

---

### 6. `KscopeHoverDirective`

Maneja el estado del cursos con retardo (_delays_) configurables de entrada y salida para evitar activaciones accidentales en menús o tooltips.

- **Selector:** `[kscopeHover]`
- **Inputs:**
  - `kscopeHoverEnterDelay`: `number` (default: `0`) — Retardo de entrada en ms.
  - `kscopeHoverLeaveDelay`: `number` (default: `0`) — Retardo de salida en ms.
- **Outputs:**
  - `kscopeHoverChange`: `output<boolean>()` — Emite `true` al entrar y `false` al salir.

```html
<div
  kscopeHover
  [kscopeHoverEnterDelay]="200"
  [kscopeHoverLeaveDelay]="150"
  (kscopeHoverChange)="isTooltipVisible.set($event)"
>
  Pasa el cursor aquí
</div>
```

---

### 7. `KscopeRippleDirective`

Genera una animación de onda táctil (_Material Ripple_) en la posición exacta del cursor o toque del usuario.

- **Selector:** `[kscopeRipple]`
- **Inputs:**
  - `kscopeRippleColor`: `string` (default: `'rgba(255, 255, 255, 0.35)'`) — Color del destello.
  - `kscopeRippleDisabled`: `boolean` (default: `false`) — Desactiva el efecto.

```html
<button kscopeRipple kscopeRippleColor="rgba(0, 0, 0, 0.1)">Efecto Ripple</button>
```

---

## 🚀 Integración mediante `hostDirectives`

Puedes asociar estas directivas a nivel de componente para otorgar interactividad avanzada sin ensuciar las plantillas del usuario final:

```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  KscopeRippleDirective,
  KscopePreventDoubleClickDirective,
} from '../directives/interaction';

@Component({
  selector: 'kscope-button',
  standalone: true,
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [KscopeRippleDirective, KscopePreventDoubleClickDirective],
})
export class KscopeButtonComponent {}
```

---

## 📦 Exportación del Módulo

Todas las directivas se exportan a través del punto de entrada unificado:

```typescript
import {
  KscopeClickOutsideDirective,
  KscopeRippleDirective,
  KscopeKeyboardShortcutDirective,
} from '@kscope/ui';
```
