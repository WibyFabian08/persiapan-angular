import { Injectable } from '@angular/core';
import { UsersService } from './users/services/users.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UsersService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['users']);
    }
    return this.userService.isLoggedIn();
  }
  
}
