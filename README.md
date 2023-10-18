## Project Setup

- `src` - application root
  - `app` - application code
    - `api` - auto generated from swagger
    - `shared` - common components, services, modules
    - `protected` - admin facing sub-site
    - `public` - user facing sub-site

### Sub-Site Setup
- `subsite` - user or admin
  - `subsite.module.ts`
  - `subsite-routing.module.ts`
  - `public` - non-authenticate routes
  - `protected` - authenticated routes
    - `components` - shared components
    - `services` - shared services
    - `modules` - pages of the site are modules with their own components and services.
      - `module_name` - generate via `ng g component component_name` where component_name is the new page
      - `components` - add all module components beneath it.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
When generating a new top level module ensure that modules are **not** added to any parent modules. All modules should contain their own routing and style component.
New modules should bcontrie lazy loaded via routes.

## Swagger Integration

**Do not run swagger unless you are absolutely sure you want to replace the api directory.**

- Run `npx @openapitools/openapi-generator-cli generate  --skip-validate-spec --global-property --enable-post-process-file=true  --additional-properties=withInterfaces=true --additional-properties=paramNaming=camelCase --additional-properties=ngVersion=14.0.3  -i ./swagger.yml -g typescript-angular -o src/app/api/`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
