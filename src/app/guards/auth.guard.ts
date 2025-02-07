import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DataInfosService } from '../service/data-infos.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const dataInfosService = inject(DataInfosService); // Injecter le service
  const router = inject(Router); // Injecter le Router

  // Vérifiez si l'utilisateur est authentifié
  const isAuthenticated = dataInfosService.isAuthenticated();

  if (isAuthenticated) {
    return true; // Autoriser l'accès à la route
  } else {
    // Rediriger vers la page de connexion
    return router.createUrlTree(['/login']); // Retourner un UrlTree pour la redirection
  }
};