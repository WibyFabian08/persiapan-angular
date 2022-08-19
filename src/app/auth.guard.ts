import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsersService } from './users/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UsersService) {}

  canActivate(): any {
    return this.userService.isLogin;
  }
  
}
