import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  createService: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createService = this.fb.group({
      name: ['', Validators.required],
      code: ['', [Validators.pattern('^DV-\\d{4}$'), Validators.required]],
      area: [0,[Validators.min(1),Validators.required]],
      cost: [0,[Validators.min(1),Validators.required]],
      maxPeople: [0,[Validators.min(1),Validators.required]],
      numberOfFloors: [0,[Validators.min(1),Validators.required]],
      poolArea: [0,[Validators.min(1),Validators.required]],
      description: [0,[Validators.min(1),Validators.required]],
      standardRoom: ["",Validators.required],
      rentType:"",
      serviceType:""
    })
  }

  onSubmit() {
    console.log(this.createService.value)
  }
}
