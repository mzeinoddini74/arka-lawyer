import {UserModel} from '../user/UserModel';
import {LegalCategoryModel} from './LegalCategoryModel';

export class LegalCaseModel{
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public category: string,
    public user: string,
    public date: string,
    public isExpanded: boolean
  ) {
  }
}
