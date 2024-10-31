Pour créer un interceptor dans Angular qui gère l'injection et la régénération automatique des tokens, tu peux suivre ces étapes :

### Étape 1 : Créer l'interceptor

Commence par créer un fichier pour ton interceptor, par exemple `token-interceptor.service.ts`.

```typescript
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service'; // Ton service d'authentification

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken(); // Récupérer le token actuel

    let authReq = req;
    if (token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(authReq).pipe(
      catchError(error => {
        if (error.status === 401) { // Si le token est expiré
          return this.authService.refreshToken().pipe( // Regénérer le token
            switchMap(newToken => {
              this.authService.setToken(newToken); // Sauvegarder le nouveau token
              const newAuthReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${newToken}`,
                },
              });
              return next.handle(newAuthReq); // Réessayer la requête avec le nouveau token
            })
          );
        }
        return of(error); // Gérer les autres erreurs
      })
    );
  }
}
```

### Étape 2 : Ajouter l'interceptor à votre module

Dans le fichier `app.module.ts`, ajoute ton interceptor dans le tableau des providers.

```typescript
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token-interceptor.service';

@NgModule({
  declarations: [
    // tes composants ici
  ],
  imports: [
    // tes modules ici
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [/* ton composant principal ici */]
})
export class AppModule {}
```

### Étape 3 : Écrire les tests

Dans le fichier de test que tu as partagé, tu peux vérifier que l'interceptor est correctement créé et fonctionne comme prévu. Assure-toi que ton service d'authentification est mocké si nécessaire.

### Exemple de test

Voici un exemple de test pour vérifier que l'interceptor est bien instancié :

```typescript
import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './token-interceptor.service';
import { AuthService } from './auth.service'; // Assure-toi d'importer ton service
import { of } from 'rxjs';

class MockAuthService {
  getToken() {
    return 'mock-token';
  }
  refreshToken() {
    return of('new-mock-token');
  }
  setToken(token: string) {
    // Logique pour stocker le token
  }
}

describe('TokenInterceptorService', () => {
  let service: TokenInterceptor;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        TokenInterceptor,
        { provide: AuthService, useClass: MockAuthService },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
      ],
    }).compileComponents();

    service = TestBed.inject(TokenInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
```

### Conclusion

Avec ces étapes, tu as mis en place un interceptor qui injecte des tokens et les régénère automatiquement en cas d'expiration. Assure-toi de bien tester tous les cas d'usage, notamment les cas d'erreur pour garantir que ton interceptor fonctionne correctement dans toutes les situations.
