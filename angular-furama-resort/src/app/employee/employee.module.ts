import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {ViewEmployeeComponent} from './view-employee/view-employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';


@NgModule({
  declarations: [ListEmployeeComponent,CreateEmployeeComponent,ViewEmployeeComponent,EditEmployeeComponent, DeleteEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmployeeModule { }
