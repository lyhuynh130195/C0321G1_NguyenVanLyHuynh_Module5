import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeleteCustomerComponent} from '../customer/delete-customer/delete-customer.component';
import {ListContractComponent} from './list-contract/list-contract.component';
import {CreateContractComponent} from './create-contract/create-contract.component';
import {EditContractComponent} from './edit-contract/edit-contract.component';


const routes: Routes = [
  {
    path: '',
    component: ListContractComponent
  },
  {
    path: 'list',
    component: ListContractComponent
  }, {
    path: 'create',
    component: CreateContractComponent
  }, {
    path: 'edit/:id',
    component: EditContractComponent
  }, {
    path: 'delete/:id',
    component: DeleteCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
