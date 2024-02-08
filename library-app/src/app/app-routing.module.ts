import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanListComponent } from './loanComponents/loan-list/loan-list.component';
import { AutorListComponent } from './autorComponents/autor-list/autor-list.component';
import { AutorAddComponent } from './autorComponents/autor-add/autor-add.component';
import { BookAddComponent } from './bookComponents/book-add/book-add.component';
import { BookListComponent } from './bookComponents/book-list/book-list.component';
import { ClientListComponent } from './clientComponents/client-list/client-list.component';
import { CliendAddComponent } from './clientComponents/cliend-add/cliend-add.component';
import { LoanAddComponent } from './loanComponents/loan-add/loan-add.component';
import { AutorEditComponent } from './autorComponents/autor-edit/autor-edit.component';
import { ReportLoansComponent } from './loanComponents/report-loans/report-loans.component';
import { ReportMonthlyComponent } from './loanComponents/report-monthly/report-monthly.component';
import { ReportWeeklyComponent } from './loanComponents/report-weekly/report-weekly.component';
import { BookEditComponent } from './bookComponents/book-edit/book-edit.component';
import { LoanEditComponent } from './loanComponents/loan-edit/loan-edit.component';
import { ClientEditComponent } from './clientComponents/client-edit/client-edit.component';

const routes: Routes = [
  { path: 'loans', component: LoanListComponent },
  { path: '', redirectTo: 'loans', pathMatch: 'full' },
  { path: 'autors', component: AutorListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'loans', component: LoanListComponent },
  { path: 'add-autor', component: AutorAddComponent },
  { path: 'add-book', component: BookAddComponent },
  { path: 'add-client', component: CliendAddComponent },
  { path: 'add-loan', component: LoanAddComponent },
  { path: 'edit-autor/:id', component: AutorEditComponent },
  { path: 'report-overdue', component: ReportLoansComponent },
  { path: 'report-monthly', component: ReportMonthlyComponent },
  { path: 'report-weekly', component: ReportWeeklyComponent },
  { path: 'edit-book/:id', component: BookEditComponent },
  { path: 'edit-loan/:id', component: LoanEditComponent },
  { path: 'edit-client/:id', component: ClientEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
