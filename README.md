- This project has been made using React and JavaScript framework. Tailwind has been used for giving the CSS. 
- The entire frontend setup has:
- - The left hand section which contains nothing just a text in it but it is responsive with different screen sizes.
- - The right hand section has `Top Section` , `HR ruler` and `Bottom Section`. Top Section consists of three clickable buttons, although they lacj functionality as it was not mentioned in the project exactly. Bottom section consistes of `GALLERY` sign , followed by a `ADD IMAGE` button and `2 arrow keys`. On adding image, I have stored the photos in the local storage wich gets displayed in the grid form.
- - The project consits of `scroll bar`, with which you can move left or right using the `arrow keys`.

- - There is no backend storage used in this project as it was not mentioned in the project itself. Although, we can store the photos in a databse like MongoDB, if we want to continue this project further.

- - TO BE INSTALLED:
`npm install`
`npm install react-router-dom`

- - Add this to tailwind.config.js file:
`@type {import('tailwindcss').Config} */`
  `export default {`
  `content: [`
    `"./index.html",`
    `"./src/**/*.{js,ts,jsx,tsx}",`
  `],`
  `theme: {`
    `extend: {},`
  `},`
  `plugins: [],`
`} `
`@tailwind base;`
`@tailwind components;`
`@tailwind utilities;`  in the `index.css`.

- - FOR TAILWIND:
`npm install -D tailwindcss@3 postcss autoprefixer`
`npx tailwindcss init -p`

- - For Tailwind Scrollbar:
`npm install --save-dev tailwind-scrollbar`
Add `@import 'tailwindcss';` to `tailwind.config.js`


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
