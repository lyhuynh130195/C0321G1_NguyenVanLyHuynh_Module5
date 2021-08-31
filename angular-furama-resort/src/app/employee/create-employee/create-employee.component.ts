import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../service/employee.service';
import {Division} from '../model/division';
import {Position} from '../model/position';
import {Education} from '../model/education';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  creatEmployee: FormGroup;
  divisions: Division[];
  positions: Position[];
  educations: Education[];

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService,
              private router: Router) {
    this.divisions = employeeService.divisions
    this.positions = employeeService.positions
    this.educations = employeeService.educations
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
        position:['', Validators.required],
        division:['', Validators.required],
        education:['', Validators.required],
      }
    )
  }

  onSubmit() {
    const employee = this.creatEmployee.value
    if(this.creatEmployee.valid){
      this.employeeService.saveEmployee(employee).subscribe(() =>{
        alert("create employee success")
        this.router.navigateByUrl("/employees/list")
      })
    }

  }
}
