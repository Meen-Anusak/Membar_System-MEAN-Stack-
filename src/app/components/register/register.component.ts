import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../shared/account.service';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.routing';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  AppURL = AppURL

  constructor(
    private builder: FormBuilder,
    private account: AccountService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.CreateFormRegister();
  }

  CreateFormRegister() {
    this.form = this.builder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
    })
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.account.Register(this.form.value).subscribe(
      res => alert(res.message)
      )
    
  }

}
