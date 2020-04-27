import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UserlistComponent } from './components/userlist/userlist.component';


@NgModule({
  declarations: [DashboardComponent,ProfileComponent, AdduserComponent, UserlistComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
