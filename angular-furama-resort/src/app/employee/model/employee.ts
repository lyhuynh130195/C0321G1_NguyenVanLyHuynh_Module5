import {Division} from './division';
import {Education} from './education';
import {Position} from './position';

export interface Employee {
  id: number;
  name: string;
  birthday: string;
  idCard: string;
  phone: string;
  email: string;
  address: string;
  position: Position;
  division:Division;
  education:Education;
}
