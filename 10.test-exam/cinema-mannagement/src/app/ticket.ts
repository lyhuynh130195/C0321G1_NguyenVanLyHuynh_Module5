import {Movie} from './movie';

export interface Ticket {
  id:number;
  code:string;
  movie:Movie;
  dateWatch:string;
  count:number;
}
