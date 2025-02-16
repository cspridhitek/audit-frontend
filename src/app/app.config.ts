import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';  // ✅ Import provideHttpClient
import { CommonModule } from '@angular/common';  // ✅ Required for @for

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    CommonModule ,
    provideRouter(routes),
    provideHttpClient()  // ✅ Add this to enable HTTP services
  ]
};
