import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import {ViewEmployeeComponent} from './view-employee/view-employee.component';


const routes: Routes = [
  {
    path: '',
    component: ListEmployeeComponent
  },
  {
    path: 'list',
    component: ListEmployeeComponent
  }, {
    path: 'create',
    component: CreateEmployeeComponent
  }, {
    path: 'edit/:id',
    component: EditEmployeeComponent
  },
  {
    path: 'view/:id',
    component: ViewEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
