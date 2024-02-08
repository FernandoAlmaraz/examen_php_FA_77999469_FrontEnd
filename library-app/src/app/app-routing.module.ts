import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanListComponent } from './loanComponents/loan-list/loan-list.component';
import { AutorListComponent } from './autorComponents/autor-list/autor-list.component';
import { AutorAddComponent } from './autorComponents/autor-add/autor-add.component';

const routes: Routes = [
  { path: 'loans', component: LoanListComponent },
  { path: '', redirectTo: 'loans', pathMatch: 'full' },
  { path: 'autors', component: AutorListComponent },
  { path: 'add-autor', component: AutorAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
