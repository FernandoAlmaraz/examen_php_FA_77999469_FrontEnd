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
import { BookAddComponent } from './bookComponents/book-add/book-add.component';
import { CliendAddComponent } from './clientComponents/cliend-add/cliend-add.component';
import { LoanAddComponent } from './loanComponents/loan-add/loan-add.component';
import { AutorEditComponent } from './autorComponents/autor-edit/autor-edit.component';
import { ReportLoansComponent } from './loanComponents/report-loans/report-loans.component';
import { ReportMonthlyComponent } from './loanComponents/report-monthly/report-monthly.component';
import { ReportWeeklyComponent } from './loanComponents/report-weekly/report-weekly.component';
import { BookEditComponent } from './bookComponents/book-edit/book-edit.component';
import { ClientEditComponent } from './clientComponents/client-edit/client-edit.component';
import { EditEditComponent } from './loanComponents/edit-edit/edit-edit.component';
import { LoanEditComponent } from './loanComponents/loan-edit/loan-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    AutorListComponent,
    ClientListComponent,
    BookListComponent,
    LoanListComponent,
    AutorAddComponent,
    BookAddComponent,
    CliendAddComponent,
    LoanAddComponent,
    AutorEditComponent,
    ReportLoansComponent,
    ReportMonthlyComponent,
    ReportWeeklyComponent,
    BookEditComponent,
    ClientEditComponent,
    EditEditComponent,
    LoanEditComponent
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
