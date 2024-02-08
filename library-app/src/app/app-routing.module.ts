import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanListComponent } from './loanComponents/loan-list/loan-list.component';
import { AutorListComponent } from './autorComponents/autor-list/autor-list.component';
import { AutorAddComponent } from './autorComponents/autor-add/autor-add.component';
import { BookAddComponent } from './bookComponents/book-add/book-add.component';
import { BookListComponent } from './bookComponents/book-list/book-list.component';
import { ClientListComponent } from './clientComponents/client-list/client-list.component';
import { CliendAddComponent } from './clientComponents/cliend-add/cliend-add.component';

const routes: Routes = [
  { path: 'loans', component: LoanListComponent },
  { path: '', redirectTo: 'loans', pathMatch: 'full' },
  { path: 'autors', component: AutorListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'add-autor', component: AutorAddComponent },
  { path: 'add-book', component: BookAddComponent },
  { path: 'add-client', component: CliendAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
