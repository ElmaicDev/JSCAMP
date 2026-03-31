### INSTALACIÓN Y CREACIÓN DE VITE

npm create vite@latest

esto creará vite con la última versión.

Después preguntará el nombre del proyecto y la tecnología a usar, hay desde crear un proyecto solo a punta de JavaScript (Vanilla) hasta react, vue, svelte, entre otros.

Escoges la que se ajuste al proyecto.

Después se escoge la variante que es el compilador que se va a usar, hay desde TypeScript hasta JavaScript, estos usan babel para convertir el formato a jsx y renderizar los componentes. Está react Compiler + TS o JS que más adelante se explicará. Y por último JS o TS + SWC que usa rust para compilar por lo que es más rápido. esta se escoge.

### Explicación de subcarpetas creadas por vite.

- node_modules: Carpeta de dependencias de npm
- public: archivos estáticos, imágenes, fuentes, svg...
- src: Código fuente de la app.
  jsx son archivos de react, que convierte JSX a JS.

  1. Main.jsx: Es el punto de entrada de la aplicación. Tiene dentro el root y el redenrizado de la aplicación.
  2. Package .json: Define los scripts, dependencias y dependencias de desarrollo del proyecto. Acá tiene a react y reactDom que está descargado en node_modules.
  3. index.html: es el HTML de entrada, que contiene el contenedor del root.
  4. vite.Config: utilizar biblioteca interna de react y cómo la tiene que compilar.
