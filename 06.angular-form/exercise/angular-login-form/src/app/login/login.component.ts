import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  listAcount =[{email:'abc@gmail.com',password:'123456'},{email: 'abcd@gmail.com',password: '123456'}]
  successLogin:string;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(6)]]
    })
  }

  onSubmit() {
    for (const acc of this.listAcount) {
      if(acc.email===this.loginForm.value.email && acc.password === this.loginForm.value.password){
       return  this.successLogin ="Login thành công";
      }
    }
   return  this.successLogin = "Login error";
  }
}
