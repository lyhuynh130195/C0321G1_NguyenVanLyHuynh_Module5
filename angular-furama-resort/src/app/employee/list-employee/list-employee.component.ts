import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
listEmployee: Employee[] =[
  {id:1,name:'quang',birthday: '10-10-1994',idCard:'159874631',phone:'0966598585',email: 'quang@gmail.com',address:'HN',position:'Giám đốc'},
  {id:2,name:'hai',birthday: '11-11-1997',idCard:'965874123',phone:'0962159645',email: 'hai@gmail.com',address:'DN',position:'Nhân viên'},
  {id:3,name:'dat',birthday: '12-10-1998',idCard:'695874256',phone:'0963125487',email: 'dat@gmail.com',address:'HN',position:'Nhân viên'},
  {id:4,name:'tu',birthday: '14-12-1999',idCard:'236598521',phone:'0369548521',email: 'tu@gmail.com',address:'DN',position:'Quản lí'},
  {id:5,name:'tai',birthday: '22-10-1993',idCard:'123659874',phone:'0823651489',email: 'tai@gmail.com',address:'DN',position:'Nhân viên'},
  {id:6,name:'huyen',birthday: '10-10-2000',idCard:'985475123',phone:'0963256321',email: 'huyen@gmail.com',address:'HN',position:'Nhân viên'},
  {id:7,name:'trang',birthday: '30-10-2001',idCard:'123659852',phone:'0974589879',email: 'trang@gmail.com',address:'DN',position:'Nhân viên'},
  {id:8,name:'yen',birthday: '01-09-1996',idCard:'652139845',phone:'0965898567',email: 'yen@gmail.com',address:'HN',position:'Nhân viên'},
  {id:9,name:'duyen',birthday: '16-07-1994',idCard:'123645985',phone:'0969698749',email: 'duyen@gmail.com',address:'HN',position:'Nhân viên'},
]
  p: number;

  constructor() { }

  ngOnInit(): void {
  }

}
