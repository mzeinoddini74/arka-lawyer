import { Injectable } from '@angular/core';
import {AttorneyModel} from '../../models/attorney/AttorneyModel';

@Injectable({
  providedIn: 'root'
})
export class AttorneyDataService {
  list: AttorneyModel[];

  getAllData(): AttorneyModel[]{
    return this.list;
  }
  setData(data: AttorneyModel[]): void{
    this.list = data;
  }
  getDataById(i: number): AttorneyModel{
    return  this.list.find(x => x.id === i);
  }
}

