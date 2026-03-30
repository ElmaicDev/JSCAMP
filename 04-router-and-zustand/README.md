# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## PROP DRILLING

Es cuando a una infinidad de componentes se le debe pasar una propiedad para que todos los componentes reaccionen a su cambio. Esto viene con un problema gigantesco, porque genera que se vuelvan a renderizar todos los componentes.

Para solucionar el prop drilling se puede de 2 formas:

1. Composición de componentes: Se podría aprovechar la composción y en lugar de crear componentes, pasarlo a una función como children. Pero esto no soluciona el problema del todo. No es tan cómodo.
2. React Context: Api que permite tener estado global sin tener que pasar las props en cada nivel.

### Create Context

Para eso se debe importar de react el createContext, esto se hace para utentificación. 

export const AuthContext = createCOntext()

Para el context se necesitan dos cosas: 

1. Proveedor: Quien provee la información. El proveedor debe envolver la aplicación, por lo que debe recibir como prop un children.
2. Consumidor: El que consume la información

Desde la últimas actualizaciones de react ya no se necesita usar el hook de useContext porque el hook use ya lo hace por defecto. Es exactamente lo mismo.

Use sirve para ller contextos y promesas.

### Cuando usar prop Drilling o context.

- PropDrilling: Mejor para 1 o 2, máximo 3 niveles.
- Context API: Está pensado para estados que no cambia mucho, que son poco frecuentes. Representa : Estado global, autenticación, tema, idioma... Pero cuando la app es más grande, se necesitan bibliotecas como zustand que simplifica más los estados globales.

  Se pueden usar tantos providers como se necesiten. Incluso el Browser Router es un provider.

## ZUSTAND

Es una biblioteca minimalista para manejar el estado global, en alemán significa "estado". Es ultra ligera (pesa 1k), y no existen providers y solo renderiza los componentes necesarios.


Para usar se importa create que es usado para crear una store y te devuelve un custom hook y debe recibir como parámetro una función que con set y get.

Cuando se hacen componentes con estados globales, es bueno separarlos para que no se re-rendericen componentes que no tienen sentido, por eso, en jobcard, se separó el botón de favoritos.

### RUTAS PROTEGIDAS

Las rutas protegidas se hacen junto con zustand porque me permiten almacenar de manera global si el usuario está loggeado o no. 

En react Router no se permite que la ruta protegida envuelva a la etiqueta Route, sino que debe envolver el elemento (el children que será pasado)

RECOMENDACIÓN: Cuando un usuario cierre sesión es mejor refrescar la página para evitar otros estados intermedios.
