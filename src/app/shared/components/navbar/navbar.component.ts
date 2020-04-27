import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.routing';
import { AuthenService } from '../../services/authen.service';
import { Router } from '@angular/router';
import { AuthenURL } from 'src/app/authentication/authen.url';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  AppURL = AppURL
  AuthenURL = AuthenURL

  constructor(
    private authen : AuthenService,
    private router : Router,
    private alert : AlertService
  ) { }

  ngOnInit(): void {
  }


  onLogout(){
    this.alert.alertNotify('ออกจากระบบเรียบร้อย','info')
    this.authen.removeAccessToken();
    this.router.navigate(['/',AppURL.Login])
  } 

}
