import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { OpenTriviaService } from './open-trivia/open-trivia';
import { tap } from 'rxjs';
import { appendTokenInterceptor } from './open-trivia/append-token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch(), withInterceptors([appendTokenInterceptor])),
    provideAppInitializer(() =>
      inject(OpenTriviaService)
        .getSessionToken()
        .pipe(
          tap(({ token }) => {
            sessionStorage.setItem('OPEN_TRIVIA_SESSION_TOKEN', token);
          }),
        ),
    ),
  ],
};
