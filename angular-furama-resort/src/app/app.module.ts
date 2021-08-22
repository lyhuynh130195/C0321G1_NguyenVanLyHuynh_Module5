import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { CreateServiceComponent } from './service/create-service/create-service.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { EditContractComponent } from './contract/edit-contract/edit-contract.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    ListServiceComponent,
    CreateServiceComponent,
    EditServiceComponent,
    ListContractComponent,
    CreateContractComponent,
    EditContractComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
