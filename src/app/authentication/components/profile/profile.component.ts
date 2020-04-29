import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.routing';
import { AuthenURL } from '../../authen.url';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  AppURL = AppURL;
  AuthenURL = AuthenURL
  form : FormGroup

  constructor(
    private builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.CreateFromEditProfile()
  }

  CreateFromEditProfile(){
    this.form = this.builder.group({
      fname :[],
      lname:[],
      email:[],
      image:[],
    })
  }
  onSubmit(){
    console.log(this.form.value);  
  }

}
