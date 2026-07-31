# ♿ Accessibility Directives (`directives/accessibility`)

El submódulo de **Directivas de Accesibilidad** de **Kscope Design System** proporciona una capa de infraestructura declarativa y reactiva para garantizar el cumplimiento de los estándares **WCAG 2.1 AA** y la navegación por teclado accesible.

Estas directivas permiten inyectar semántica ARIA y comportamientos de foco en elementos nativos y componentes _Standalone_ sin acoplar la lógica al HTML ni vulnerar los principios de inmutabilidad visual.

---

## 📌 Principios de Ingeniería

1. **Standalone & Zero-Dep:** Directivas 100% `standalone: true` sin dependencias de `NgModule`.
2. **Signals Native:** Basadas en la API moderna de Angular (`input()`) para un rendimiento óptimo con `ChangeDetectionStrategy.OnPush`.
3. **SSR Ready:** Utilizan `Renderer2` y bindings declarativos (`@HostBinding`), evitando el acceso no seguro al objeto `document` o `window`.
4. **Composición de Host (`hostDirectives`):** Diseñadas para integrarse limpiamente dentro de Átomos, Moléculas y Organismos.

...
