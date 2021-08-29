import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../../service-data/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
listEmployee: Employee[]

  p: number;

  constructor(private employeeService: EmployeeService) {
    this.employeeService.getALlEmployee().subscribe(value => {
      this.listEmployee = value;
    })
  }

  ngOnInit(): void {
  }

}
