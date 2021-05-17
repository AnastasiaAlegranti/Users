import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppComponent} from './components/app.component/app.component';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BooksComponent} from './components/books/books.component';
import {BookDetailsModalComponent} from './components/book-details-modal/book-details-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailsModalComponent
  ],
  entryComponents: [
    BookDetailsModalComponent
  ],
  imports: [BrowserModule,
    IonicModule.forRoot({scrollPadding: true, scrollAssist: false, mode: 'md'}), // mode:'md'- style android style///// _forceStatusbarPadding: true,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
