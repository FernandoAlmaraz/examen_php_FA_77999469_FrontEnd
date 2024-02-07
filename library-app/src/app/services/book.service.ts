import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private urlBase = "http://localhost:8000/api/v1/books"
  constructor(private clientHttp: HttpClient) { }

  obtainBookList(): Observable<Book[]> {
    return this.clientHttp.get<any>(this.urlBase)
      .pipe(map
        (response => response.data.map((book: Book) => ({
          id: book.id,
          title: book.title,
          lot: book.lot,
          autor_id: book.autor_id,
          description: book.description,
          genre: book.genre,
          updated_at: book.updated_at,
          created_at: book.created_at
        })))
      );
  }
}
