import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './AuthService.service'; // Ton service d'authentification

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken(); // Récupérer le token actuel
    const refreshToken = this.authService.getRefreshToken(); // Récupérer le refreshToken

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
          return this.authService.refreshToken(refreshToken).pipe( // Regénérer le token avec le refreshToken
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
