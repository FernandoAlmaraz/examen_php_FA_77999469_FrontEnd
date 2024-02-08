import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [];
  constructor(private service: BookService) {
  }
  ngOnInit() {
    this.obtainBooks();
  }
  private obtainBooks() {
    this.service.obtainBookList().subscribe(
      ((data) => {
        this.books = data;
      })
    );
  }
  deleteBook(id: number) {
    this.service.deleteBook(id).subscribe({
      next: (data) => this.obtainBooks(),
      error: (error: any) => console.log(error)
    });
  }
}
