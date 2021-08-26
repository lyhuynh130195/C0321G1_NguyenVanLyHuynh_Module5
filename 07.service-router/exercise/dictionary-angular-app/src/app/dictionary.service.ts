import {Injectable} from '@angular/core';
import {IWord} from "./iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionnary: IWord[] = [
    {word: 'hello', mean: 'xin chào'},
    {word: 'school', mean: 'trường học'},
    {word: 'apple', mean: 'quả táo'},
    {word: 'advice', mean: 'lời khuyên'},
    {word: 'action', mean: 'hành động'}
  ]

  constructor() {
  }

  getAll() {
    return this.dictionnary;
  }

  findByWord(word: string): IWord {

    return  this.dictionnary.find(dictionary => dictionary.word === word)

  }
}
