import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Autor } from 'src/app/models/autor';
import { Book } from 'src/app/models/book';
import { AutorService } from 'src/app/services/autor.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  book: Book = new Book();
  autors: Autor[] = [];
  constructor(private autorService: AutorService,
    private bookService: BookService,
    private router: Router) { }

  ngOnInit() {
    this.obtainAutors();
  }

  obtainAutors() {
    this.autorService.obtainAutorList().subscribe(
      ((data) => {
        this.autors = data;
      })
    );
  }

  onSubmit() {
    this.addBook();
  }

  addBook() {

    this.bookService.addBook(this.book).subscribe({
      next: data => {
        console.log(data)
        this.redirectListBooks();
      },
      error: (error: any) => {
        console.log(error)
      }
    });

  }

  redirectListBooks() {
    this.router.navigate(['/books'])
  }
}
