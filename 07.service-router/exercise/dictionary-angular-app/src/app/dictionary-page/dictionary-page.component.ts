import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../dictionary.service";
import {IWord} from "../iword";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dictionarys: IWord[]

  constructor(private dictionaryService: DictionaryService) {
    this.dictionarys = this.dictionaryService.getAll();
  }

  ngOnInit(): void {
  }

}
