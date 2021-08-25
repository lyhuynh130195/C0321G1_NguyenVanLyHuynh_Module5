import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editEmployee: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editEmployee = this.fb.group({
      id:0,
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      idCard: ['', [Validators.pattern('^(\\d{9}$|\\d{12})$'), Validators.required]],
      phone: ['', [Validators.pattern('^0\\d{9}$'), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      address: ['', Validators.required],
      salary:["",[Validators.required,Validators.min(1)]],
      position:"",
      division:"",
      education:""
    })
  }

  onSubmit() {

  }
}
