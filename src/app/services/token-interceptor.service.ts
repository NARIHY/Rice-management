import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './AuthService.service'; // Votre service d'authentification

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken(); // Récupérer le token actuel
    const authReq = this.addAuthorizationHeader(req, token); // Ajoute le token à la requête

    return next.handle(authReq).pipe(
      catchError(error => this.handleError(error, req, next))
    );
  }

  private addAuthorizationHeader(req: HttpRequest<any>, token: string | null): HttpRequest<any> {
    if (token) {
      return req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return req; // Retourne la requête sans modification si aucun token
  }

  private handleError(error: any, req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (error.status === 401) { // Si le token est expiré
      localStorage.removeItem('token')
      const refreshToken = this.authService.getRefreshToken(); // Récupérer le refreshToken

      return this.authService.refreshToken(refreshToken).pipe( // Regénérer le token
        switchMap(newToken => {
          this.authService.setToken(newToken.token); // Sauvegarder le nouveau token
          const newAuthReq = this.addAuthorizationHeader(req,newToken.token); // Refaire la requête avec le nouveau token
          return next.handle(newAuthReq); // Réessayer la requête avec le nouveau token
        }),
        catchError(refreshError => {
          // this.authService.logout(); // Logout en cas d'erreur lors du rafraîchissement
          return of(refreshError); // Gérer l'erreur de rafraîchissement
        })
      );
    }
    // Gérer les autres erreurs
    return of(error);
  }
}
