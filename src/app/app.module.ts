import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  entryComponents: [
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({scrollPadding: true, scrollAssist: false, mode: 'md'}), // mode:'md'- style android style
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
