// main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { httpInterceptorProviders } from './app/interceptors';
import { LOCALE_ID } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    httpInterceptorProviders,
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ]
})
.catch(err => console.error(err));
