import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { webcomponentsReady } from '@codebakery/origami/polyfills';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

webcomponentsReady()
  .then(() => import('./app/app.module')
  .then(({ AppModule }) => {
    platformBrowserDynamic()
    .bootstrapModule(AppModule);
  }));

