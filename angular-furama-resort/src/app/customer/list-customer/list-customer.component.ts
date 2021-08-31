import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteCustomerComponent} from '../delete-customer/delete-customer.component';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  listCustomer: Customer[]
  p: number;
  term: any;

  constructor(private customerService: CustomerService,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.customerService.getALlCustomer().subscribe(value => {
      this.listCustomer = value;
    })
  }


  openDialog(id: any) {
    this.customerService.findById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteCustomerComponent, {
        width: '500px',
        data: {customer: data},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(() => {
        this.ngOnInit();
      });
    });
  }

  searchCustomer() {
    this.customerService.searchCustomer(this.term).subscribe(data => {
      this.listCustomer = data;
      this.p = 1;
    })
  }
}
