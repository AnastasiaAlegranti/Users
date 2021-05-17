import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {BooksService} from '../../services/books.service';
import {ModalController} from '@ionic/angular';
import {BookDetailsModalComponent} from '../book-details-modal/book-details-modal.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  public searchTerm: string;
  public booksList: Book[];
  public filteredBooks: Book[];

  public constructor(public booksService: BooksService, private  modalController: ModalController) {
  }

  public ngOnInit() {
    this.booksList = this.booksService.getBooksList();
    this.filteredBooks = this.booksList;
  }

  public filterBooks() {
    this.filteredBooks = this.booksList.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  public async getBookDetails(book: Book) {
    const tempBook = Object.assign({}, book);
    const modal = await this.modalController.create({
      component: BookDetailsModalComponent,
      cssClass: 'details-modal',
      backdropDismiss: false,
      componentProps: {
        book: tempBook,
        booksList: this.booksList
      }
    });
    modal.onDidDismiss().then((detail) => {
      if (detail && detail.data) {
        book.title = detail.data.title;
        book.author = detail.data.author;
        book.isbn = detail.data.isbn;
        book.publishedDate = detail.data.publishedDate;
        book.thumbnailUrl = detail.data.thumbnailUrl;
      }
    });
    return await modal.present();
  }


  public async addBook() {
    const tempBook = new Book('', '', '', '', '');
    const modal = await this.modalController.create({
      component: BookDetailsModalComponent,
      cssClass: 'details-modal',
      backdropDismiss: false,
      componentProps: {
        book: tempBook,
        booksList: this.booksList
      }
    });
    modal.onDidDismiss().then((detail) => {
      if (detail && detail.data) {
        this.booksList.push(detail.data);
        this.filteredBooks = [...this.booksList];
      }
    });
    return await modal.present();
  }

  public removeBook(book: Book) {
    this.booksList = this.booksList.filter(el => el.isbn !== book.isbn);
    this.filteredBooks = this.booksList;
  }
}
