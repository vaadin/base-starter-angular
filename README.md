# Base Starter for Vaadin Elements and Angular

## Instructions

### Install all dependencies

Run `bower install` to install all the necessary dependencies. After this you can run the development server.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Recreating this project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5 with additional steps to include bower dependencies. You can recreate the project by following along these steps:

First [install npm](https://docs.npmjs.com/getting-started/installing-node)
Then install Bower: 
```
$ npm install -g bower
```

``` bash
$ npm install -g @angular/cli
$ ng new hello-angular
$ cd hello-angular

# We will use a third-party helper library https://github.com/hotforfeature/origami
$ npm install --save @codebakery/origami
$ bower init
# Keep everything default

$ cat > .bowerrc
{"directory": "src/assets/bower_components"}
ctrl+D

$ bower install --save Polymer/polymer
$ bower install --save vaadin
```

If you'd like to not commit bower dependencies to your version control, add `src/assets/bower_components` to `.gitignore`.

Open `src/index.html` and add the following in the `<head>` section:
``` html
<script src="assets/bower_components/webcomponentsjs/webcomponents-loader.js"></script>
<link rel="import" href="assets/bower_components/vaadin-valo-theme/vaadin-button.html">
<link rel="import" href="assets/bower_components/vaadin-button/vaadin-button.html">
<link rel="import" href="assets/bower_components/vaadin-valo-theme/vaadin-text-field.html">
<link rel="import" href="assets/bower_components/vaadin-text-field/vaadin-text-field.html">
```

Open `src/main.ts`
  In the `import` section, add:
``` typescript
import { webcomponentsReady } from '@codebakery/origami';
```
	Wrap `platformBrowserDynamic` code with:
``` typescript
webcomponentsReady().then(() => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
}).catch(error => {
  // No WebComponent support and webcomponentsjs is not loaded
  console.error(error);
});
```
  
Open `src/app/app.module.ts`
	Update the `import` section:
``` typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PolymerModule } from '@codebakery/origami';
```
  Inside the `@NgModule` definition, add:
``` typescript
schemas: [CUSTOM_ELEMENTS_SCHEMA],
```
  Inside the `@NgModule` definition, add this to the `imports` array:
``` typescript
PolymerModule.forRoot(),
```

Open `src/app/app.component.html` and replace all the HTML code with:
``` html
<vaadin-text-field id="text" placeholder="Type Something"></vaadin-text-field>
<vaadin-button (click)='clicked()'>Click Me!</vaadin-button>
<h2>Hello {{title}}!</h2>
```

Open `src/app/app.component.ts` and define the click event inside the `class`:
``` typescript
clicked() {
  this.title = document.getElementById('text')['value'];
}
```