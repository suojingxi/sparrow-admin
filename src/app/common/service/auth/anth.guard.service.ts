import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (sessionStorage.getItem('userId') == null) {
      return true;
    }
    const url: string = state.url;
    sessionStorage.setItem('redirectUrl', url);
    this.router.navigate(['/login']);
    return false;
  }
}
