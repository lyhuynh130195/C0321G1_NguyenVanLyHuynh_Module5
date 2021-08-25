import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-contract',
  templateUrl: './edit-contract.component.html',
  styleUrls: ['./edit-contract.component.css']
})
export class EditContractComponent implements OnInit {
  editContract: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.editContract = this.fb.group({
      id:0,
      startDate: ["",Validators.required],
      endDate: ["",Validators.required],
      deposit:[0,Validators.min(1)],
      customer:"",
      employee:"",
      service:""
    })
  }

  onSubmit() {

  }
}
