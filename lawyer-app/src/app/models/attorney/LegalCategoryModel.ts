export class LegalCategoryModel{
  constructor(
    public id: number,
    public title: string,
    public parent: number,
    public date: string
  ) {
  }
}
