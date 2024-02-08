import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from 'src/app/models/autor';
import { Book } from 'src/app/models/book';
import { AutorService } from 'src/app/services/autor.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
  book: Book = new Book();
  autors: Autor[] = [];
  id: number = 0;
  constructor(private bookService: BookService,
    private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    this.obtainAutors();
    this.id = this.route.snapshot.params['id'];
    this.bookService.obtainBookById(this.id).subscribe(
      {
        next: (data) => this.book = data,
        error: (error: any) => console.log(error)
      });
    console.log(this.book)
  }
  obtainAutors() {
    this.autorService.obtainAutorList().subscribe(
      ((data) => {
        this.autors = data;
      })
    );
  }
  onSubmit() {
    this.safeBook();
  }
  safeBook() {
    this.bookService.editBook(this.id, this.book).subscribe({
      next: (data) => this.goToListBooks(),
      error: (error: any) => console.log(error)
    });
  }
  goToListBooks() {
    this.router.navigate(['/books']);
  }
}
