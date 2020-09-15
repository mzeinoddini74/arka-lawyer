export class CommentModel {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public comment: string,
    public like: number,
    public dislike: number,
    public date: string,
    public isExpanded: boolean,
    public innerComments?: CommentReplyModel[]
  ) {
  }
}

export class CommentReplyModel {
  constructor(
    public id: number,
    public parent: number,
    public name: string,
    public email: string,
    public comment: string,
    public like: number,
    public dislike: number,
    public date: string
  ) {
  }
}
