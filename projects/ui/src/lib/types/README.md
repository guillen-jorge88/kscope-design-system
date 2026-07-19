# Kscope UI - Shared Types Hub

Este directorio centraliza las uniones de tipos (`string unions`), alias y contratos globales de eventos utilizados de manera transversal por todo el Design System.

## Principios de este módulo:
1. **Evitar Acoplamiento**: Los componentes jamás declaran tipos genéricos como `Size` o `Color` de forma interna. Los importan desde `@kscope/ui/types`.
2. **Uso Eficiente de TypeScript**: Se priorizan uniones de tipos literales (`type Size = 'sm' | 'md'`) sobre `enums`. Esto asegura un nulo impacto en el bundle de producción y máxima compatibilidad con las directivas de Angular.
3. **Prefijo en Interfaces**: Las interfaces de eventos usan el prefijo `Ks` (ej. `KsChangeEvent`) para prevenir colisiones con las interfaces nativas del DOM del navegador.