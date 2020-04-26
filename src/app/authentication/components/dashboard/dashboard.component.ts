import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/shared/services/authen.service';
import { IUser } from './user_model';
import { AccountService } from 'src/app/components/shared/account.service';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.routing';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  User : IUser
  constructor(
    private authen : AuthenService,
    private account : AccountService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.account.getProfile(this.authen.getAccessToken())
    .subscribe(res => this.User = res)
  }

  onLogout(){
    this.authen.removeAccessToken();
    this.router.navigate(['/',AppURL.Login])
  }
}
