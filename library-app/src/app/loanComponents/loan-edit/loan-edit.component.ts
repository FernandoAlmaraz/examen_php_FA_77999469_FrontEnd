import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Client } from 'src/app/models/client';
import { Loan } from 'src/app/models/loan';
import { BookService } from 'src/app/services/book.service';
import { ClientService } from 'src/app/services/client.service';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-edit',
  templateUrl: './loan-edit.component.html',
  styleUrls: ['./loan-edit.component.css']
})
export class LoanEditComponent {
  loan: Loan = new Loan();
  books: Book[] = [];
  clients: Client[] = [];
  id: number = 0;
  constructor(
    private loanService: LoanService,
    private clietService: ClientService,
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,) { }
  ngOnInit() {
    this.obtainClients();
    this.obtainBooks();
    this.id = this.route.snapshot.params['id'];
    this.loanService.obtainLoanById(this.id).subscribe(
      {
        next: (data) => this.loan = data,
        error: (error: any) => console.log(error)
      });
  }
  obtainClients() {
    this.clietService.obtainClientList().subscribe(
      ((data) => {
        this.clients = data;
      })
    );
  }
  obtainBooks() {
    this.bookService.obtainBookList().subscribe(
      ((data) => {
        this.books = data;
      })
    );
  }
  onSubmit() {
    this.editLoan();
  }
  editLoan() {
    this.loanService.editLoan(this.id, this.loan).subscribe({
      next: data => {
        this.redirectListBooks();
      },
      error: (error: any) => {
        console.log(error)
      }
    });
  }
  redirectListBooks() {
    this.router.navigate(['/loans'])
  }
}
