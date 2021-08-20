import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  number1: 0;
  number2: 0;
  action: string;
  result: number;


  constructor() {
  }

  ngOnInit(): void {
  }

  calculate() {
    if (typeof this.number1 !== 'number' || typeof this.number2 !== 'number') {
      this.result = 0;
    }
    switch (this.action) {
      case 'Add':
        this.result = this.number1 + this.number2;
        break;
      case 'Sub':
        this.result = this.number1 - this.number2;
        break;
      case 'Mul':
        this.result = this.number1 * this.number2;
        break;
      case 'Div':
        this.result = this.number1 / this.number2;
        break;
      default:
        this.result = 0;
        break;
    }
  }
}
