# Rwazi Note App

Please design a user-friendly, single-page note-taking application using Vue 3 Composition API. The application should allow users to easily add and remove notes, and the notes should be displayed on the main page in a responsive format. Please [watch this video](https://rwazi-public.s3.amazonaws.com/interview/vue-notes-interview-project.webm) to get an idea of what it might look like.

Photo: https://rwazi-public.s3.amazonaws.com/interview/rwazi-vue-notes-interview.png

The following requirements should be met:

* [x] The layout of the application must be responsive to ensure optimal user experience.
* [x] Users should be able to seamlessly add notes to the application.
* [x] The application should allow users to effortlessly remove notes when necessary.
* [ ] The user should be able to sort by date create the notes.
* [x] The user should be able to search for text in the notes.
* [ ] If the number of notes is high, pagination should be implemented.
* [x] To add an element of visual interest, the background of the application should be randomly generated.
* [x] Finally, each note element should feature a date stamp at the bottom to help users keep track of when they made each note.

Please ensure that you use Vue 3 Composition API when building the application.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
