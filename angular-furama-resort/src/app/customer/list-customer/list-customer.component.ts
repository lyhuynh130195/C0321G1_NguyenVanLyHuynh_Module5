import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  listCustomer: Customer[] = [{
    id: 1,
    code: 'KH-1000',
    name: 'An',
    type: 'Diamond',
    birthday: '11-11-1995',
    gender: 'Male',
    idCard: '123456789',
    phone: '0987897654',
    email: 'an@gmail.com',
    address: 'DN'
  },
     {
      id: 2,
      code: 'KH-1001',
      name: 'Binh',
      type: 'Diamond',
      birthday: '11-11-1995',
      gender: 'Male',
      idCard: '123658749',
      phone: '0966857412',
      email: 'binh@gmail.com',
      address: 'DN'
    },
    {
      id: 3,
      code: 'KH-1002',
      name: 'Hai',
      type: 'Diamond',
      birthday: '09-11-1997',
      gender: 'Male',
      idCard: '369852147',
      phone: '09658321456',
      email: 'hai@gmail.com',
      address: 'DN'
    },
    {
      id: 4,
      code: 'KH-1003',
      name: 'Hoa',
      type: 'Diamond',
      birthday: '08-11-1995',
      gender: 'FeMale',
      idCard: '987456321',
      phone: '0966897123',
      email: 'hoa@gmail.com',
      address: 'DN'
    },
    {
      id: 5,
      code: 'KH-1004',
      name: 'Lan',
      type: 'Diamond',
      birthday: '04-11-1999',
      gender: 'FeMale',
      idCard: '258963147',
      phone: '0997123999',
      email: 'lan@gmail.com',
      address: 'DN'
    },
    {
      id: 6,
      code: 'KH-1005',
      name: 'Linh',
      type: 'Diamond',
      birthday: '04-11-1999',
      gender: 'FeMale',
      idCard: '369852159',
      phone: '0988987789',
      email: 'linh@gmail.com',
      address: 'DN'
    }];
  p: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
