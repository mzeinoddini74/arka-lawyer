export class BlogModel {
  constructor(
    public id: number,
    public title: string,
    public picture: string,
    public summary: string,
    public description: string,
    public date: string
  ) {
  }
}
