import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [DashboardComponent, ProfileComponent,],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
