import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Client } from 'src/app/models/client';
import { Loan } from 'src/app/models/loan';
import { BookService } from 'src/app/services/book.service';
import { ClientService } from 'src/app/services/client.service';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-add',
  templateUrl: './loan-add.component.html',
  styleUrls: ['./loan-add.component.css']
})
export class LoanAddComponent {
  loan: Loan = new Loan();
  books: Book[] = [];
  clients: Client[] = [];
  constructor(
    private loanService: LoanService,
    private clietService: ClientService,
    private bookService: BookService,
    private router: Router) { }

  ngOnInit() {
    this.obtainClients();
    this.obtainBooks();
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
    this.addLoan();
  }

  addLoan() {
    this.loanService.addLoan(this.loan).subscribe({
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
