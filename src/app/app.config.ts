import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; // 👈 Import it

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    CookieService // 👈 Add it to the providers
  ]
};
