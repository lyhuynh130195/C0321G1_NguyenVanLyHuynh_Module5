import {Component, OnInit} from '@angular/core';
import {Service} from '../service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})

export class ListServiceComponent implements OnInit {
  listService: Service[] = [
    {
      id: 1,
      name: 'furama-villa1',
      code: 'VL-1234',
      area: 1000,
      cost: 1000,
      rentType: 'day',
      serviceType: 'Villa',
      poolArea: 100,
      numberOfFloor: 10
    },
    {
      id: 2,
      name: 'furama-house1',
      code: 'HS-1234',
      area: 700,
      cost: 700,
      rentType: 'day',
      serviceType: 'House',
      poolArea: 100,
      numberOfFloor: 5
    },
    {
      id: 3,
      name: 'furama-villa2',
      code: 'VL-1234',
      area: 1000,
      cost: 1000,
      rentType: 'day',
      serviceType: 'Villa',
      poolArea: 100,
      numberOfFloor: 10
    },
    {
      id: 4,
      name: 'furama-villa3',
      code: 'VL-1234',
      area: 1000,
      cost: 1000,
      rentType: 'day',
      serviceType: 'Villa',
      poolArea: 100,
      numberOfFloor: 10
    },
    {
      id: 5,
      name: 'furama-house2',
      code: 'HS-1234',
      area: 700,
      cost: 700,
      rentType: 'day',
      serviceType: 'House',
      poolArea: 100,
      numberOfFloor: 6
    }
  ];
  p: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
