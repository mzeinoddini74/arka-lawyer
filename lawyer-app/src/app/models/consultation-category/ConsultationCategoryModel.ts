export class ConsultationCategoryModel{
  constructor(
    public id: number,
    public title: string,
    public parent: number
  ) {
  }
}
