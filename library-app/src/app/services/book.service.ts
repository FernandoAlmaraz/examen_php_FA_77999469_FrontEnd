import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { DateFormaterService } from './date-formater.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private urlBase = "http://localhost:8000/api/v1/books"
  constructor(private clientHttp: HttpClient,
    private formater: DateFormaterService) { }

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
          updated_at: book.updated_at ? this.formater.formatDate(new Date(book.updated_at)) : null,
          created_at: book.created_at ? this.formater.formatDate(new Date(book.created_at)) : null
        })))
      );
  }
  addBook(book: Book): Observable<Book> {
    return this.clientHttp.post<Book>(this.urlBase, book);
  }

  obtainBookById(id: number): Observable<Book> {
    console.log(`${this.urlBase}/${id}`);
    return this.clientHttp.get<any>(`${this.urlBase}/${id}`).pipe(
      map(response => ({
        id: response?.data?.id || response?.id,
        title: response?.data?.title || response?.title,
        autor_id: response?.data?.autor_id || response?.autor_id,
        lot: response?.data?.lot || response?.lot,
        description: response?.data?.description || response?.description,
        genre: response?.data?.genre || response?.genre,
        updated_at: response?.data?.updated_at || null,
        created_at: response?.data?.created_at || null
      }))
    );
  }

  editBook(id: number, book: Book): Observable<object> {
    return this.clientHttp.put<any>(`${this.urlBase}/${id}`, book);
  }

  deleteBook(id: number): Observable<Object> {
    return this.clientHttp.delete(`${this.urlBase}/${id}`);
  }
}
