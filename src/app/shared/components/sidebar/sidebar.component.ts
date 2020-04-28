import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.routing';
import { AuthenURL } from 'src/app/authentication/authen.url';
import { AccountService } from 'src/app/components/shared/account.service';
import { AuthenService } from '../../services/authen.service';
import { IUser } from 'src/app/authentication/user.interface';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  AppURL = AppURL
  AuthenURL = AuthenURL

  User : IUser

  constructor(
    private account : AccountService,
    private authen : AuthenService
    ) { }

  ngOnInit(): void {
    this.account.getProfile(this.authen.getAccessToken())
      .subscribe((res =>{
        this.User = res
      }))
    } 
  }


