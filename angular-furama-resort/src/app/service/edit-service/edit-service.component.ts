import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  editService: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editService = this.fb.group({
      id:0,
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

  }
}
