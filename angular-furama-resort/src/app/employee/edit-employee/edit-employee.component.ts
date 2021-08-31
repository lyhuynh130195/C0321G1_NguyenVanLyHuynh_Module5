import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Division} from '../model/division';
import {Position} from '../model/position';
import {Education} from '../model/education';
import {EmployeeService} from '../service/employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id:number
  editEmployee: FormGroup;
  divisions: Division[];
  positions: Position[];
  educations: Education[];

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService,
              private router: Router,
              private activatedRoute:ActivatedRoute) {

    this.divisions = employeeService.divisions
    this.positions = employeeService.positions
    this.educations = employeeService.educations

  }

  ngOnInit(): void {
    this.editEmployee = this.fb.group({
      id:0,
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      idCard: ['', [Validators.pattern('^(\\d{9}$|\\d{12})$'), Validators.required]],
      phone: ['', [Validators.pattern('^0\\d{9}$'), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      address: ['', Validators.required],
      position:['', Validators.required],
      division:['', Validators.required],
      education:['', Validators.required]
    })
    const id =this.activatedRoute.snapshot.params.id
    this.id = id
    this.employeeService.findById(id).subscribe(value => {
      this.editEmployee.setValue(value)
    })
  }

  onSubmit(id) {
    const employee = this.editEmployee.value;
    if(this.editEmployee.valid){
      this.employeeService.upDateEmployee(id,employee).subscribe(()=>{
        alert("edit success")
        this.router.navigateByUrl("/employees/list")
      })
    }

  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
