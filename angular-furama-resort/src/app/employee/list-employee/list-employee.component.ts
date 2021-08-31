import {Component, OnInit} from '@angular/core';
import {Employee} from '../model/employee';
import {EmployeeService} from '../service/employee.service';
import {Division} from '../model/division';
import {Position} from '../model/position';
import {Education} from '../model/education';
import {DeleteCustomerComponent} from '../../customer/delete-customer/delete-customer.component';
import {DeleteEmployeeComponent} from '../delete-employee/delete-employee.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  listEmployee: Employee[];

  p: number
  term: ''
  positionName:''
  positions: Position[]


  constructor(private employeeService: EmployeeService,
              public dialog: MatDialog) {
    this.positions= this.employeeService.positions
  }

  ngOnInit(): void {
    this.employeeService.getALlEmployee().subscribe(value => {
      this.listEmployee = value;
    });
  }

  openDialog(id: any) {
    this.employeeService.findById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
        width: '500px',
        data: {employee: data},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(() => {
        this.ngOnInit();
      });
    });
  }


  searchEmployee() {
    this.employeeService.search(this.term, this.positionName).subscribe(data => {
      this.listEmployee = data;
      this.p = 1;
    })
  }
}
