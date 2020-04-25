import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup

  constructor(
    private account : AccountService,
    private builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.CreateFormLogin();
  }

  CreateFormLogin(){
    this.form = this.builder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  onSubmit(){
    if(this.form.invalid) return;
    this.account.Login(this.form.value).subscribe(res => console.log(res))
  }
}
