import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRgister } from '../register/register.model';
import { AuthenService } from 'src/app/shared/services/authen.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

   RegisterURL = 'http://localhost:3000/users/register'
   LoginURL ='http://localhost:3000/users/login'
   getUser = 'http://localhost:3000/users/profile'
  constructor( 
    private http : HttpClient,
    private authen : AuthenService
    ) { }

  Register(registerForm : Observable<IRgister>){
    return this.http.post<any>(this.RegisterURL,registerForm);
  }

  Login(loginForm : Observable<any>){
    return this.http.post<any>(this.LoginURL,loginForm);
    
  }

  getProfile(token: string):Observable<any>{
    const myHeader ={
      'Authorization': 'Bearer '+token
    }
    return this.http.get<any>(this.getUser,{headers:myHeader})
  }
}
