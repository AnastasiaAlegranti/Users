import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {AlertController, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-book-details-modal',
  templateUrl: './book-details-modal.component.html',
  styleUrls: ['./book-details-modal.component.scss'],
})
export class BookDetailsModalComponent implements OnInit {
  @Input() book: Book;
  @Input() booksList: Book[];
  public originIsbn: string;
  public required = {title: false, author: false, isbn: false, thumbnailUrl: false, publishedDate: false};// For marking required fields.
  public maxDate = new Date().toISOString();//Maximum date in datepicker is today.

  constructor(private modalController: ModalController, private alertController: AlertController) {
  }

  public ngOnInit() {
    this.originIsbn = this.book.isbn;//Save origin isbn for further validations
  }

  public async checkValidation(): Promise<boolean> { // Check fields vlidation, if not valid- mark in red .
    if (!this.book.title || this.book.title.trim() === '') {
      this.required.title = true;
      return false;
    }
    if (!this.book.author || this.book.author.trim() === '') {
      this.required.author = true;
      return false;
    }
    if (!this.book.isbn || this.book.isbn.trim().length < 10 || this.book.isbn.trim() === '') {
      await this.showMessage('Book id must be 10 chars long.');
      this.required.isbn = true;
      return false;
    }
    if (this.book.isbn !== this.originIsbn) {
      const found = this.booksList.some(el => el.isbn === this.book.isbn);
      if (found) {
        await this.showMessage('Book id must be unique.');
        this.required.isbn = true;
        return false;
      }
    }
    if (!this.book.publishedDate || this.book.publishedDate === '') {
      this.required.publishedDate = true;
      return false;
    }
    if (!this.book.thumbnailUrl || this.book.thumbnailUrl.trim() === '') {
      this.required.thumbnailUrl = true;
      return false;
    }
    return true;
  }

  public async dismiss(book: Book) {
    if (book) {
      const bool = await this.checkValidation();
      if (!bool) {
        return;
      }
    }
   await this.modalController.dismiss(book);
  }

  public async showMessage(message: string) {
    const alert = await this.alertController.create({
      message,
      buttons: [{
        text: 'ok'
      }]
    });
    await alert.present();
  }
}
