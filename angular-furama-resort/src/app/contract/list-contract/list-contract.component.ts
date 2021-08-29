import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service-data/contract.service';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  listContract: Contract[];

  p: number;

  constructor(private contractService: ContractService) {
    this.contractService.getALlContract().subscribe(value => {
      this.listContract = value;
    });

  }

  ngOnInit(): void {
  }

}
