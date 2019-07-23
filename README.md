# Base Starter for Vaadin components with Angular

## Prerequisites

First [install yarn](https://yarnpkg.com/docs/install).

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:4200
$ yarn start

# build for production with minification
$ yarn build
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

To get more help check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Recreating this project

```bash
$ yarn global add @angular/cli
$ ng new hello-angular
$ cd hello-angular

$ yarn add @vaadin/vaadin-core
```

In `src/app/app.module.ts`:

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
```

...and inside `@NgModule` add:

```typescript
schemas: [CUSTOM_ELEMENTS_SCHEMA],
```

In `src/app/app.component.ts`:

```typescript
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
```

In `src/app/app.component.html`:

```html
<vaadin-text-field #textField placeholder="Type Something"></vaadin-text-field>
<vaadin-button (click)='title=textField.value'>Click Me!</vaadin-button>
<h2>Hello {{title}}!</h2>
```
