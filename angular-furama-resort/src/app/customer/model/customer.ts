import {CustomerType} from './customertype';

export interface Customer {
  id: number;
  code: string;
  name:string;
  customerType:CustomerType;
  birthday:string;
  gender:string;
  idCard:string;
  phone:string;
  email:string;
  address:string
}
