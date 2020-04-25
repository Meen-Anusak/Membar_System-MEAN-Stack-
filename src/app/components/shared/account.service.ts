import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRgister } from '../register/register.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

   RegisterURL = 'http://localhost:3000/users/register'
   LoginURL ='http://localhost:3000/users/login'

  constructor( 
    private http : HttpClient
    ) { }

  Register(registerForm : Observable<IRgister>){
    return this.http.post<any>(this.RegisterURL,registerForm);
  }

  Login(loginForm : Observable<any>){
    return this.http.post<any>(this.LoginURL,loginForm);
    
  }
}
