import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenService } from '../shared/services/authen.service';
import { AppURL } from '../app.routing';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements CanActivate {
  constructor(private authen : AuthenService,private router : Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      const token = this.authen.getAccessToken()
      
    if (token) {
      return true;
    }
    this.router.navigate(['/',AppURL.Login,{returnURL :state.url}]);
    return false;
    
  }
  
}
