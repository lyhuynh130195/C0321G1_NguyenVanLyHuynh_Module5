import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createCustomerForm = this.fb.group({
      code: ['', [Validators.pattern('^KH-\\d{4}$'), Validators.required]],
      name: ['', Validators.required],
      type: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      idCard: ['', [Validators.pattern('^(\\d{9}$|\\d{12})$'), Validators.required]],
      phone: ['', [Validators.pattern('^0\\d{9}$'), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.createCustomerForm.value);
  }
}
