export class TelConsultationModel{
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public category: string,
    public user: string,
    public date: string,
    public duration: string,
    public isExpanded: boolean
  ) {
  }
}
