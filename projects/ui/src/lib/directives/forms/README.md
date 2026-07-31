# 📝 Forms Directives (`directives/forms`)

El submódulo de **Directivas de Formularios** de **Kscope Design System** proporciona una suite de directivas declarativas para la **transformación, restricción, saneamiento y formateo de datos de entrada** en tiempo real.

Diseñado para funcionar sobre elementos nativos (`<input>`, `<textarea>`, `<form>`) y dentro de componentes de control de formularios de Kscope (`FormField`, `PasswordField`, `SearchField`, `DateField`, `CurrencyField`, etc.), asegurando coherencia visual y lógica en el manejo de entradas del usuario.

---

## 📌 Principios de Ingeniería

1. **Standalone & Zero-Dep:** Componentes de directivas 100% `standalone: true` sin acoplamiento a módulos legacy.
2. **Signals Native:** Basadas en la API reactiva moderna de Angular (`input()`) para un rendimiento óptimo bajo `ChangeDetectionStrategy.OnPush`.
3. **Form Integrity:** Compatibles con `ReactiveForms` (`ControlValueAccessor`) e `NgModel` sin corromper el ciclo de cambio de estado.
4. **Type-Safe:** Sin uso de `any`, tipado estricto para elementos `HTMLInputElement`, `HTMLTextAreaElement` y `HTMLFormElement`.

---

## 📂 Estructura del Submódulo

```text
projects/ui/src/lib/directives/forms/
├── numeric-only.directive.ts          # Restricción exclusiva para dígitos 0-9
├── decimal-only.directive.ts          # Control de entradas decimales y precisión
├── currency.directive.ts              # Formateo de moneda ISO / Intl en tiempo real
├── phone.directive.ts                 # Máscara de teléfonos con comodines
├── input-mask.directive.ts            # Máscara de entrada genérica (fechas, tarjetas, etc.)
├── trim.directive.ts                  # Sanitización de espacios sobrantes en blur
├── uppercase.directive.ts             # Transformación automática a mayúsculas
├── lowercase.directive.ts             # Transformación automática a minúsculas
├── max-length.directive.ts            # Límite estricto de caracteres
├── auto-select.directive.ts           # Selección total del texto al enfocar
├── auto-focus-invalid.directive.ts    # Enfoque automático del primer control inválido al enviar
├── prevent-enter-submit.directive.ts  # Previene el submit accidental al presionar Enter
├── README.md                          # Documentación técnica del submódulo
└── index.ts                           # Public Export Barrier
```

---

## 🛠️ Catálogo de Directivas y Ejemplos de Uso

### 1. `KscopeNumericOnlyDirective`

Restringe la entrada permitiendo únicamente dígitos numéricos (`0-9`) y teclas de navegación/edición (`Backspace`, `Delete`, `Arrows`, atajos `Ctrl/Cmd+C/V`).

- **Selector:** `[kscopeNumericOnly]`
- **Inputs:**
  - `kscopeNumericOnly`: `boolean` (default: `true`) — Activa/desactiva la restricción.

```html
<input type="text" [kscopeNumericOnly]="true" placeholder="Número de documento" />
```

---

### 2. `KscopeDecimalOnlyDirective`

Permite ingresar números con un único separador decimal (punto o coma) y un límite configurable de precisión decimal.

- **Selector:** `[kscopeDecimalOnly]`
- **Inputs:**
  - `kscopeMaxDecimals`: `number` (default: `2`) — Cantidad máxima de decimales permitidos.
  - `kscopeDecimalSeparator`: `'.' | ','` (default: `'.'`) — Carácter separador.

```html
<input type="text" kscopeDecimalOnly [kscopeMaxDecimals]="3" placeholder="0.000" />
```

---

### 3. `KscopeCurrencyDirective`

Aplica formato de moneda local/ISO (`Intl.NumberFormat`) automáticamente al perder el foco (`blur`).

- **Selector:** `[kscopeCurrency]`
- **Inputs:**
  - `kscopeCurrency`: `string` (default: `'USD'`) — Código de moneda ISO 4217.
  - `kscopeCurrencyLocale`: `string` (default: `'en-US'`) — Configuración regional (locale).

```html
<input type="text" kscopeCurrency="COP" kscopeCurrencyLocale="es-CO" placeholder="$ 0,00" />
```

---

### 4. `KscopePhoneDirective`

Aplica una máscara de formato telefónico en tiempo real.

- **Selector:** `[kscopePhone]`
- **Inputs:**
  - `kscopePhone`: `string` (default: `'(000) 000-0000'`) — Patrón de máscara telefónica (`0` o `9` representan dígitos).

```html
<input type="text" kscopePhone="+57 (000) 000-0000" placeholder="+57 (300) 000-0000" />
```

---

### 5. `KscopeInputMaskDirective`

Máscara genérica reactiva para patrones personalizados.

- **Selector:** `[kscopeInputMask]`
- **Inputs:**
  - `kscopeInputMask`: `string` (**Required**) — Patrón de formato (`0` = dígito, `A` = letra, `*` = alfanumérico).

```html
<!-- Máscara de tarjeta de crédito -->
<input type="text" kscopeInputMask="0000 0000 0000 0000" placeholder="0000 0000 0000 0000" />

<!-- Máscara de fecha -->
<input type="text" kscopeInputMask="00/00/0000" placeholder="DD/MM/YYYY" />
```

---

### 6. `KscopeTrimDirective`

Elimina automáticamente espacios en blanco al inicio y final del texto cuando el input pierde el foco (`blur`).

- **Selector:** `[kscopeTrim]`
- **Inputs:**
  - `kscopeTrim`: `boolean` (default: `true`)

```html
<input type="email" [kscopeTrim]="true" placeholder="correo@ejemplo.com" />
```

---

### 7. `KscopeUppercaseDirective`

Transforma la entrada del texto a MAYÚSCULAS en tiempo real manteniendo la posición del cursor.

- **Selector:** `[kscopeUppercase]`

```html
<input type="text" kscopeUppercase placeholder="CÓDIGO POSTAL / PLACA" />
```

---

### 8. `KscopeLowercaseDirective`

Transforma la entrada del texto a minúsculas en tiempo real manteniendo la posición del cursor.

- **Selector:** `[kscopeLowercase]`

```html
<input type="text" kscopeLowercase placeholder="nombre.usuario" />
```

---

### 9. `KscopeMaxLengthDirective`

Establece un límite estricto de longitud de caracteres previniendo entradas adicionales y emitiendo eventos sincronizados.

- **Selector:** `[kscopeMaxLength]`
- **Inputs:**
  - `kscopeMaxLength`: `number` (**Required**) — Límite máximo de caracteres.

```html
<textarea kscopeMaxLength="250" placeholder="Escriba su comentario..."></textarea>
```

---

### 10. `KscopeAutoSelectDirective`

Selecciona automáticamente todo el contenido del campo al recibir el foco (`focus`), facilitando su rápida sobreescritura.

- **Selector:** `[kscopeAutoSelect]`

```html
<input type="number" kscopeAutoSelect [value]="100" />
```

---

### 11. `KscopeAutoFocusInvalidDirective`

Se aplica a un elemento `<form>`. Al detonar el evento `submit`, detecta el primer campo con estado inválido (`.ng-invalid` o `aria-invalid="true"`) y desplaza el foco automáticamente hacia él.

- **Selector:** `form[kscopeAutoFocusInvalid]`

```html
<form [formGroup]="userForm" kscopeAutoFocusInvalid (ngSubmit)="saveUser()">
  <input formControlName="name" />
  <input formControlName="email" />
  <button type="submit">Guardar</button>
</form>
```

---

### 12. `KscopePreventEnterSubmitDirective`

Previene que al presionar la tecla `Enter` dentro del input se efectúe el envío involuntario del formulario.

- **Selector:** `[kscopePreventEnterSubmit]`

```html
<input type="text" kscopePreventEnterSubmit placeholder="Presione Enter sin enviar el form" />
```

---

## 🚀 Integración mediante `hostDirectives`

Puedes integrar estas directivas dentro de los componentes atómicos del sistema sin necesidad de escribirlas en las plantillas del usuario:

```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { KscopeTrimDirective, KscopeAutoSelectDirective } from '../directives/forms';

@Component({
  selector: 'kscope-amount-input',
  standalone: true,
  template: `<input type="text" class="kscope-input" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [KscopeTrimDirective, KscopeAutoSelectDirective],
})
export class KscopeAmountInputComponent {}
```

---

## 📦 Exportación del Módulo

Todas las directivas se exportan a través del punto de entrada unificado:

```typescript
import {
  KscopeNumericOnlyDirective,
  KscopeCurrencyDirective,
  KscopeInputMaskDirective,
  KscopeAutoFocusInvalidDirective,
} from '@kscope/ui';
```
