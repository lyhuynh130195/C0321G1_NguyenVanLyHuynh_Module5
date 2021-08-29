import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service-data/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editCustomerForm: FormGroup;
  id:number;

  constructor(private fb: FormBuilder,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.params.id
    this.id=id
    this.customerService.findById(id).subscribe(value => {
      this.editCustomerForm.setValue(value)
    });
    this.editCustomerForm = this.fb.group({
      id:0,
      code: ['', [Validators.pattern('^KH-\\d{4}$'), Validators.required]],
      name: ['', Validators.required],
      type: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      idCard: ['', [Validators.pattern('^(\\d{9}$|\\d{12})$'), Validators.required]],
      phone: ['', [Validators.pattern('^0\\d{9}$'), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      address: ['', Validators.required]

    })
  }

  ngOnInit(): void {

  }

  onSubmit(id:number) {
    const customer = this.editCustomerForm.value;
    this.customerService.upDateCustomer(id,customer).subscribe(()=>{
      alert('Cập nhật thành công');
    })
  }
}
