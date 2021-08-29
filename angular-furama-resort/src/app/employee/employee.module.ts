import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {ViewEmployeeComponent} from './view-employee/view-employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListEmployeeComponent,CreateEmployeeComponent,ViewEmployeeComponent,EditEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
