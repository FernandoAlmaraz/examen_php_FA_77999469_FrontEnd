import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutorListComponent } from './autorComponents/autor-list/autor-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClientListComponent } from './clientComponents/client-list/client-list.component';
import { BookListComponent } from './bookComponents/book-list/book-list.component';
import { LoanListComponent } from './loanComponents/loan-list/loan-list.component';
import { AutorAddComponent } from './autorComponents/autor-add/autor-add.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AutorListComponent,
    ClientListComponent,
    BookListComponent,
    LoanListComponent,
    AutorAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
