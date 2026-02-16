# 📁 PortfolioGrid

> Portfolio personal desarrollado con React, Vite y Storybook siguiendo la metodología Atomic Design.

## 🎨 Diseño

**Figma:** [Bento Grid Portfolio](https://www.figma.com/design/SA8dd1dalcAA6eWxFL9mWO/Bento-Grid-Portfolio-python?node-id=0-1&p=f&t=l3NrnTOYF84I2NDW-0)

---

## 🚀 Tecnologías

- ⚛️ **React 18** - Biblioteca de UI
- ⚡ **Vite** - Build tool y dev server
- 📚 **Storybook 9** - Desarrollo y documentación de componentes
- 🎨 **SCSS Modules** - Estilos con scope local
- 🧱 **Atomic Design** - Metodología de diseño de componentes

---

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── 00-base/              # Fundamentos del sistema de diseño
│   │   ├── 00-defaults/
│   │   │   ├── _01-variables.scss
│   │   │   ├── _02-breakpoints.scss
│   │   │   └── _03-mixins.scss
│   │   └── 01-colors/
│   │       ├── _colors-vars.scss
│   │       └── _colors-used.scss
│   ├── 01-atoms/             # Componentes atómicos
│   │   └── Button/
│   │       ├── Button.jsx
│   │       ├── Button.module.scss
│   │       └── Button.stories.js
│   ├── 02-molecules/         # Componentes moleculares
│   ├── 03-organisms/         # Componentes organismos
│   └── 04-templates/         # Plantillas de página
├── App.jsx
└── main.jsx
```

---

## 🛠️ Instalación y Uso

### Instalar dependencias

```bash
npm install
```

### Ejecutar en modo desarrollo

```bash
npm run dev
```

### Ejecutar Storybook

```bash
npm run storybook
```

### Build de producción

```bash
npm run build
```

---

## 📝 Guía de Desarrollo

### Convenciones de Archivos SCSS

#### 1. **Guion bajo `_` en nombres de archivos**

```
✅ _colors-vars.scss
✅ _01-variables.scss
❌ colors-vars.scss (sin guion bajo)
```

El guion bajo `_` indica que el archivo es un **parcial** que será importado por otros archivos.  
SASS no compila estos archivos directamente a CSS.

---

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

**¿Por qué?** CSS Modules aísla las clases por defecto. Usa `:global()` para selectores que vienen del exterior del componente.

---

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
- ✅ No contamina el scope global
- ✅ Namespace automático (evita colisiones)
- ✅ Mejor performance
- ⚠️ `@import` será removido en Dart Sass 3.0

---

#### 4. **Función `space()`**

```scss
// ✅ Con función helper
padding: calc(vars.$space * 1) calc(vars.$space * 1.5);

// ❌ Sin función (verboso y menos mantenible)
padding: 1rem 1.5rem;
```

Simplifica el uso de spacing basado en múltiplos de `$space` para mantener consistencia.

---

#### 5. **Funciones modernas de color en SASS**

```scss
// ✅ Moderno (Dart Sass 2.0+)
@use 'sass:color';
background-color: color.adjust($primary, $lightness: -10%);

// ❌ Deprecado (será removido en Dart Sass 3.0)
background-color: darken($primary, 10%);
background-color: lighten($primary, 10%);
```

**Funciones modernas:**
- `color.adjust()` - Ajusta propiedades relativas
- `color.scale()` - Escala propiedades proporcionalmente
- `color.mix()` - Mezcla dos colores

---

#### 6. **Nomenclatura en CSS Modules**

```scss
// ✅ Correcto - camelCase para CSS Modules
.btnPrimaryLarge { }
.iconRight { }

// ❌ Incorrecto - kebab-case (requiere notación de corchetes en JS)
.btn-primary-large { }  // styles['btn-primary-large']
```

```jsx
// ✅ Uso en React
import styles from './Button.module.scss';
<button className={styles.btnPrimaryLarge}>
```

---

## 🎯 Cambios Clave del Proyecto

### Modernización de SCSS

1. **`@use 'sass:color'`** y **`@use 'sass:map'`** - Módulos modernos de SASS
2. **`color.adjust()`** en lugar de `darken()` y `lighten()`
3. **`map.get()`** en lugar de `map-get()`

### CSS Modules

4. **Clases en camelCase** - `.btnPrimaryLarge` en lugar de `.btn-primary-large`
5. **Importar estilos como objeto** - `import styles from './Button.module.scss'`
6. **`:global()`** para selectores externos como `.theme-dark`

---

## 🧪 Componentes Documentados

### Atoms (Átomos)

- [x] **Button** - Botón con variantes primary, secondary, tertiary en 3 tamaños

### Molecules (Moléculas)

- [ ] En desarrollo...

### Organisms (Organismos)

- [ ] En desarrollo...

---

## 📚 Recursos

- [Figma Design System](https://www.figma.com/design/SA8dd1dalcAA6eWxFL9mWO/Bento-Grid-Portfolio-python)
- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/)
- [SASS Documentation](https://sass-lang.com/documentation/)
- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)

---

## 👨‍💻 Autor

**Johan** - [GitHub](https://github.com/johanriascos7777)

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

⭐ **¿Te gustó el proyecto?** ¡Dale una estrella en GitHub!
