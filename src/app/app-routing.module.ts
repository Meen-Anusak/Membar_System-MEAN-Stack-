import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppURL } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenGuard } from './guards/authen.guard';



const routes: Routes = [
  {path:'',redirectTo:AppURL.Login,pathMatch:'full'},
  {path:AppURL.Login,component:LoginComponent},
  {path:AppURL.Register,component:RegisterComponent},
  {path:AppURL.Authen,loadChildren: ()=> import('./authentication/authentication.module').then(m=>m.AuthenticationModule),canActivate:[AuthenGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
