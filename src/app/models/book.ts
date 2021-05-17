export class Book {
  public constructor(
    public title: string,
    public isbn: string,
    public publishedDate: string ,
    public thumbnailUrl: string,
    public author: string,
    public pageCount?: number,
  ) {
  }
}
