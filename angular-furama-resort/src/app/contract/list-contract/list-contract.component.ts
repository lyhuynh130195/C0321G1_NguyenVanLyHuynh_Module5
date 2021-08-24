import { Component, OnInit } from '@angular/core';
import {Contract} from '../contract';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  id:number;
  startDate:string;
  endDate:string;
  deposit:number;
  employeeName: string;
  customerName: string;
  serviceName:string
listContract: Contract[] = [
  {id:1,startDate:'11-08-2021',endDate:'18-08-2021',deposit:100,employeeName:'hai',customerName:'an',serviceName:'furama-villa1'},
  {id:2,startDate:'11-07-2021',endDate:'18-07-2021',deposit:100,employeeName:'quang',customerName:'linh',serviceName:'furama-villa2'},
  {id:3,startDate:'11-06-2021',endDate:'18-06-2021',deposit:100,employeeName:'binh',customerName:'duyen',serviceName:'furama-villa3'},
  {id:4,startDate:'15-08-2020',endDate:'22-08-2021',deposit:100,employeeName:'lan',customerName:'dat',serviceName:'furama-house1'},
  {id:5,startDate:'11-04-2021',endDate:'18-04-2021',deposit:100,employeeName:'ngoc',customerName:'tu',serviceName:'furama-house2'},
  {id:6,startDate:'22-08-2021',endDate:'29-08-2021',deposit:100,employeeName:'hai',customerName:'an',serviceName:'furama-house1'},
]
  p: number;
  constructor() { }

  ngOnInit(): void {
  }

}
