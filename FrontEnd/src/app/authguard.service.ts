import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = localStorage.getItem("user")
    if (this.auth.loggedIn()) {
      //  check role
      if (route.data.role == user) {
        return true
      } else {
        this.router.navigate(['/login']);
      }

      return true
    } else {
      this.router.navigate(['/login']);
      return false
    }
  }
}
