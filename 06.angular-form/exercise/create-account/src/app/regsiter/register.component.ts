import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-regsiter',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  listCountry: string[] = ['HN', 'DN', 'SG'];
  listGender: string[] = ['Male', 'Female', 'Other'];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
        email: ["",[Validators.required,Validators.email]],
        pwGroup:  this.fb.group({
          password :["",Validators.minLength(6)],
          confirmPassword:""
        },this.comparePassword),
        country: ["",Validators.required],
        age: ["",[Validators.required,Validators.min(18)]],
        gender: ["",Validators.required],
        phone: ["",[Validators.required,Validators.pattern("^\\+84\\d{9,10}$")]],
      }
    );
  }

  onSubmit() {
    console.log(this.registerForm);
  }

   comparePassword(p : AbstractControl):any{
    const v = p.value;
    return (v.password === v.confirmPassword) ? null : {notMatch : true}
  }


}
