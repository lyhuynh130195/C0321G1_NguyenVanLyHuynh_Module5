import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service-data/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  listCustomer: Customer[]

  p: number;

  constructor(private customerService: CustomerService) {
    this.customerService.getALlCustomer().subscribe(value => {
      this.listCustomer = value;
    })
  }

  ngOnInit(): void {
  }

  search() {

  }
}
