import 'zone.js'; // 🔹 Zone.js doit être importé avant tout provider
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(AppRoutingModule)
  ]
};
