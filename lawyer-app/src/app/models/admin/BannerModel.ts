export class BannerModel {
  constructor(
    public id: number,
    public picture: string,
    public title: string,
    public description: string,
    public link: string,
    public date: string,
    public isExpanded: boolean = false
  ) {
  }
}
