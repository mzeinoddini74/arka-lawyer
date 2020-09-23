export class UserModel{
  constructor(
    public id: number,
    public mobile: string,
    public password: string,
    public fullname: string,
    public gender: string,
    public tel: string,
    public email: string,
    public profilePicture: string,
    public province: string,
    public city: string,
    public address: string,
    public date: string
  ) {
  }
}
