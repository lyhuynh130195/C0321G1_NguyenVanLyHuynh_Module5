import {Component, OnInit} from '@angular/core';
import {Employee} from '../model/employee';
import {EmployeeService} from '../service/employee.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employee: Employee;

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute) {
    const id = activatedRoute.snapshot.params.id
    this.employeeService.findById(id).subscribe(value => {
      this.employee = value;
    })
  }

  ngOnInit(): void {

  }

}
