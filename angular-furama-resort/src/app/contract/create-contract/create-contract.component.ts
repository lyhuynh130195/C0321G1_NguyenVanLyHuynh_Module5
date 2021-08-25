import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  createContract: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createContract = this.fb.group({
      startDate: ["",Validators.required],
      endDate: ["",Validators.required],
      deposit:[0,Validators.min(1)],
      customer:"",
      employee:"",
      service:""
    })
  }

  onSubmit() {
    console.log(this.createContract.value)
  }
}
