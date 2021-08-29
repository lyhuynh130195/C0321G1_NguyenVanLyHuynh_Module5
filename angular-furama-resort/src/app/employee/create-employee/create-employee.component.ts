import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../service-data/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  creatEmployee: FormGroup;
  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.creatEmployee = this.fb.group(
      {
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
      }
    )
  }

  onSubmit() {
    const employee = this.creatEmployee.value
    this.employeeService.saveCustomer(employee).subscribe(() =>{
      alert("create customer success")
    })
  }
}
