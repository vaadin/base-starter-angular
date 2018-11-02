import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { webcomponentsReady } from '@codebakery/origami/polyfills';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

webcomponentsReady()
  .then(() => {
    // requires "module: "esnext" in tsconfig.json "compilerOptions" and
    // "angularCompilerOptions": {
    //   "entryModule": "app/app.module#AppModule"
    // }
    return import('./app/app.module');
  })
  .then(({ AppModule }) => {
    platformBrowserDynamic().bootstrapModule(AppModule);
  });

