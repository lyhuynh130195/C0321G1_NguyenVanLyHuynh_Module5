import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {CreateContractComponent} from './create-contract/create-contract.component';
import {EditContractComponent} from './edit-contract/edit-contract.component';
import {ListContractComponent} from './list-contract/list-contract.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DeleteContractComponent } from './delete-contract/delete-contract.component';


@NgModule({
  declarations: [CreateContractComponent,EditContractComponent,ListContractComponent, DeleteContractComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    NgxPaginationModule
  ]
})
export class ContractModule { }
