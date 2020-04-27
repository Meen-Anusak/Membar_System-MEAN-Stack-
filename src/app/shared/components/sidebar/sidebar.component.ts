import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.routing';
import { AuthenURL } from 'src/app/authentication/authen.url';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  AppURL = AppURL
  AuthenURL = AuthenURL

  constructor() { }

  ngOnInit(): void {
  }

}
