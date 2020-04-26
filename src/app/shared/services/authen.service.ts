import { Injectable } from '@angular/core';
import { HttpHeaders ,HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenService {

private accessKey = 'ssKey'

  ProfileURL ='http://localhost:3000/users/profile'

  constructor(
    private http : HttpClient
  ) { }

    //?เก็บtoken ไว้บน bowser
  setAcessToken(accesstoken){
    return localStorage.setItem(this.accessKey,accesstoken)
  }

  getAccessToken(){
    return localStorage.getItem(this.accessKey)
  }

  removeAccessToken(){
    return localStorage.removeItem(this.accessKey);
  }



}
