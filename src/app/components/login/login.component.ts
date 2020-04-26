import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenService } from 'src/app/shared/services/authen.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenURL } from 'src/app/authentication/authen.url';
import { AppURL } from 'src/app/app.routing';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  returnURL: string;

  constructor(
    private account: AccountService,
    private builder: FormBuilder,
    private authen: AuthenService,
    private router : Router,
    private activateRoute: ActivatedRoute
    
  ) { 
    this.activateRoute.params.forEach(params => {
      this.returnURL = params.returnURL || `/${AppURL.Authen}`;
  });
  }

  ngOnInit(): void {
    this.CreateFormLogin();
  }

  CreateFormLogin() {
    this.form = this.builder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.account.Login(this.form.value)
      .subscribe(
        res => {
          this.authen.setAcessToken(res.access_token)
          this.router.navigateByUrl(this.returnURL);
        }
      )
  }
}
