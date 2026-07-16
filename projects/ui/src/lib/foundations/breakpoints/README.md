# Breakpoints Foundation 📱💻

El módulo de **Breakpoints** unifica los límites de pantalla de **Kaleidoscope UI**. Ofrece una arquitectura fluida y consistente para el desarrollo responsivo, garantizando que tanto las vistas web estructuradas en SCSS como los flujos de renderizado condicional en TypeScript funcionen de manera síncrona.

---

## 📊 Escala de Breakpoints

Adoptamos la escala de visualización estándar de la industria, asegurando una curva de aprendizaje mínima para los desarrolladores y alta compatibilidad con librerías del ecosistema:

|  Token  | Valor (Min-Width) | Dispositivos Clave                            |
| :-----: | :---------------: | :-------------------------------------------- |
| **xs**  |       `0px`       | Pantallas extra pequeñas (Móviles verticales) |
| **sm**  |      `576px`      | Móviles horizontales, tablets pequeñas        |
| **md**  |      `768px`      | Tablets medianas verticales (iPads)           |
| **lg**  |      `992px`      | Laptops comunes, tablets en horizontal        |
| **xl**  |     `1200px`      | Pantallas de escritorio estándar              |
| **xxl** |     `1400px`      | Monitores panorámicos y de alta resolución    |

---

## 💻 Ejemplos de Implementación

### En Estilos SCSS de Componentes

Dispones de cuatro mixins de comportamiento responsivo que aíslan tus estilos de forma segura.

#### 1. `@include up($breakpoint)` (Mobile-First de preferencia)

Aplica estilos desde el breakpoint seleccionado hacia arriba.

```scss
.dialog {
  width: 100%;

  @include up(md) {
    width: 640px; // Se ensancha solo en pantallas de tablet hacia arriba
  }
}
```
