import {Injectable} from '@angular/core';
import {Book} from '../models/book';
import {BooksListMock} from '../mocks/books-list';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public getBooksList(): Book[] {
    return BooksListMock;
  }
}
