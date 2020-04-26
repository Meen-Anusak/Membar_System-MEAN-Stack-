import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { DashboardComponent } from "./components/dashboard/dashboard.component";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
