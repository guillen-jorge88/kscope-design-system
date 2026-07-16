# Sizing Foundation 📐

El módulo de Sizing gestiona las dimensiones físicas (anchos, alturas, diámetros) de los componentes en **Kaleidoscope UI**. A diferencia de los espaciados (_spacing_), estas dimensiones están segregadas por componentes para garantizar un control milimétrico y prevenir regresiones visuales.

---

## 📐 Escala Base y Contextos

### 1. Escala Estructural Base

Utilizada para estructurar bloques de layout generales o contenedores rígidos.

| Token | Valor (rem) | Equivalente Px |
| :---: | :---------: | :------------: |
|  xs   |   1.00rem   |      16px      |
|  sm   |   1.50rem   |      24px      |
|  md   |   2.00rem   |      32px      |
|  lg   |   2.50rem   |      40px      |
|  xl   |   3.00rem   |      48px      |
|  2xl  |   4.00rem   |      64px      |
|  3xl  |   5.00rem   |      80px      |
|  4xl  |   6.00rem   |      96px      |

---

### 2. Alturas de Componentes Interactivos (Buttons & Inputs)

| Token | Altura (rem) | Equivalente Px |
| :---: | :----------: | :------------: |
|  sm   |   2.00rem    |      32px      |
|  md   |   2.50rem    |      40px      |
|  lg   |   3.00rem    |      48px      |

---

### 3. Dimensiones de Avatares y de Iconos

| Token | Avatar (Width/Height) | Icono (Width/Height) |
| :---: | :-------------------: | :------------------: |
|  xs   |    1.50rem (24px)     |    0.75rem (12px)    |
|  sm   |    2.00rem (32px)     |    1.00rem (16px)    |
|  md   |    2.50rem (40px)     |    1.25rem (20px)    |
|  lg   |    3.00rem (48px)     |    1.50rem (24px)    |
|  xl   |    4.00rem (64px)     |    2.00rem (32px)    |

---

## 💻 Ejemplos de Implementación

### En estilos SCSS locales

Para componentes personalizados, consume los mixins semánticos provistos:

```scss
@import '@kscope/ui/foundations/sizing';

// Uso con mixin semántico de Avatar
.ks-user-avatar {
  @include avatar-size(md); // Genera width/height de 2.5rem (40px)
  border-radius: 50%;
}

// Uso con mixin semántico de Icono
.ks-system-icon {
  @include icon-size(sm); // Genera width/height de 1rem (16px)
}

// Definiendo alturas para inputs customizados usando variables CSS
.ks-custom-input {
  height: var(--ks-size-input-md); // 40px
}
```
