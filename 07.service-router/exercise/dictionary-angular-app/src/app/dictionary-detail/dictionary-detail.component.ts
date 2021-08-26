import {Component, OnInit} from '@angular/core';
import {IWord} from "../iword";
import {DictionaryService} from "../dictionary.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: IWord

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
    const words = this.activatedRoute.snapshot.params.word;
    this.dictionary = dictionaryService.findByWord(words);
  }

  ngOnInit(): void {
  }

}
