import {LegalUserType} from './ILegalUserType';

export class AttorneyModel{
  constructor(
    public id: number,
    public fullname: string,
    public gender: string,
    public tel: string,
    public email: string,
    public profilePicture: string,
    public fatherName: string,
    public address: string,
    public date: string,
    public educationList: AttorneyEducationModel[] = [],
    public workList: AttorneyWorkModel[] = [],
    public booklet: string,
    public license: string,
    public resume: string,
    public type: LegalUserType,
    public licenseValidityDate: string,
    public mobile: string
  ) {
  }
}

export class AttorneyEducationModel{
  constructor(
    public id: number,
    public attorneyId: number,
    public university: string,
    public grade: string,
    public major: string,
    public startYear: string,
    public endYear: string,
    public stillStudying: boolean,
    public degreePicture: string,
    public lastDegree: boolean,
    public date: string
  ) {
  }
}

export class AttorneyWorkModel{
  constructor(
    public id: number,
    public attorneyId: number,
    public company: string,
    public position: string,
    public startYear: string,
    public endYear: string,
    public stillWorking: boolean,
    public date: string
  ) {
  }
}
