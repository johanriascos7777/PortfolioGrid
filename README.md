# PortfolioGrid

## URL Figma

Figma https://www.figma.com/design/SA8dd1dalcAA6eWxFL9mWO/Bento-Grid-Portfolio-python?node-id=0-1&p=f&t=l3NrnTOYF84I2NDW-0



## 📝 Notas Importantes

### Convenciones de Archivos SCSS

#### 1. **Guion bajo `_` en nombres de archivos**
```
✅ _colors-vars.scss
✅ _01-variables.scss
❌ colors-vars.scss (sin guion bajo)
```
El guion bajo `_` indica que el archivo es un **parcial** que será importado por otros archivos. 
SASS no compila estos archivos directamente a CSS.

#### 2. **`:global()` en CSS Modules**
```scss
// ✅ Correcto - para selectores globales en CSS Modules
:global(.theme-dark) & {
  @include primary-colors(dark);
}

// ❌ Incorrecto - no funcionará con CSS Modules
.theme-dark & {
  @include primary-colors(dark);
}
```
CSS Modules aísla las clases por defecto. Usa `:global()` para selectores que vienen del exterior.

#### 3. **`@use` vs `@import`**
```scss
// ✅ Moderno (SCSS Modules)
@use './colors-vars' as cv;
@use './01-variables' as vars;

// ❌ Antiguo (deprecado)
@import './colors-vars';
@import './01-variables';
```
**Ventajas de `@use`:**
- No contamina el scope global
- Namespace automático (evita colisiones)
- Mejor performance
- `@import` será removido en Dart Sass 3.0

#### 4. **Función `space()`**
```scss
// ✅ Con función helper
padding: vars.space(16) vars.space(24);

// ❌ Sin función (verboso)
padding: calc($space * 16) calc($space * 24);
```
Simplifica el uso de spacing basado en múltiplos de `$space`.

---
