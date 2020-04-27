import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppURL } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenGuard } from './guards/authen.guard';
import { UnauthenGuard } from './guards/unauthen.guard';



const routes: Routes = [
  {path:'',redirectTo:AppURL.Login,pathMatch:'full'},
  {path:AppURL.Login,component:LoginComponent,canActivate:[UnauthenGuard]},
  {path:AppURL.Register,component:RegisterComponent,canActivate:[UnauthenGuard]},
  {path:AppURL.Authen,loadChildren: ()=> import('./authentication/authentication.module').then(m=>m.AuthenticationModule),canActivate:[AuthenGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
