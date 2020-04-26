import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenURL } from './authen.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const routes: Routes = [
  {path: '', redirectTo:AuthenURL.Dashboard, pathMatch:'full'},
  {path:AuthenURL.Dashboard,component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
