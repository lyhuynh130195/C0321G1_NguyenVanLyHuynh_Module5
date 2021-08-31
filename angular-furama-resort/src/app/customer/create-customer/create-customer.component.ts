import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';
import {CustomerType} from '../model/customertype';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm: FormGroup;
customerTypes: CustomerType[]
  constructor(private fb: FormBuilder,
              private customerService: CustomerService,
              private router: Router) {
  this.customerTypes = customerService.getAllCustomerType()
  }

  ngOnInit(): void {
    this.createCustomerForm = this.fb.group({
      code: ['', [Validators.pattern('^KH-\\d{4}$'), Validators.required]],
      name: ['', Validators.required],
      customerType: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      idCard: ['', [Validators.pattern('^(\\d{9}$|\\d{12})$'), Validators.required]],
      phone: ['', [Validators.pattern('^0\\d{9}$'), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    const customer = this.createCustomerForm.value
    if(this.createCustomerForm.valid){
      this.customerService.saveCustomer(customer).subscribe(() =>{
        alert("create customer success")
        this.router.navigateByUrl("/customers/list")
      })
    }
  }
}
