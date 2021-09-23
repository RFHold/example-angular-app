# ExampleAngularApp

## Environment

- [NodeJs](https://nodejs.org/) v14.17.5
- [Yarn](https://yarnpkg.com/) v1.22.11
- [Angular CLI](https://github.com/angular/angular-cli) v12.2.2
- Husky is used for commit and push hooks

## Creation

- `ng new example-angular-app --interactive --package-manager yarn --prefix eaa --routing --strict --style scss`
- `ng add @angular-eslint/schematics`
- `ng add @cypress/schematic`
- `ng add @auth0/angular-jwt`
- `ng add @ngrx/store`
- `ng add @ngrx/store-devtools`
- `ng add @ngrx/effects`
- `ng add @ngrx/router-store`
- `ng add @ngrx/entity`
- `ng add @angular/cdk`
- `ng add @angular/pwa`
- `yarn dlx husky add .husky/pre-commit "yarn lint"`
- `yarn dlx husky add .husky/pre-push "yarn test"`
- `yarn add logrocket`
- `yarn add logrocket-ngrx`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng lint` to lint the project. The flag `--fix` can be used to automatically fix most warnings.

## Lint

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via cypress.

## Considerations

## TODO

- This project needs an example websocket connection
- This project needs is using a service worker. we should add notifications and actions for PWA events
- This project needs a centralized permission system, This system should be used to guard actions against protected resources, routes, and components
- This project needs global css for layout, inputs, buttons, tooltips, and other commonly used website components
- i18n support needs to be added to this project. Angular has support for this.
- This application needs feature flags
