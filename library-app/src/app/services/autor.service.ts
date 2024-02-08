import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor';
import { DateFormaterService } from './date-formater.service';
@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private urlBase = "http://localhost:8000/api/v1/autors"
  constructor(private clientHttp: HttpClient,
    private formater: DateFormaterService) { }
  obtainAutorList(): Observable<Autor[]> {
    return this.clientHttp.get<any>(this.urlBase)
      .pipe(map
        (response => response.data.map((autor: Autor) => ({
          id: autor.id,
          name: autor.name,
          updated_at: autor.updated_at ? this.formater.formatDate(new Date(autor.updated_at)) : null,
          created_at: autor.created_at ? this.formater.formatDate(new Date(autor.created_at)) : null
        })))
      );
  }
  addAutor(autor: Autor): Observable<Autor> {
    return this.clientHttp.post<Autor>(this.urlBase, autor);
  }

  obtainAutorById(id: number): Observable<Autor> {
    return this.clientHttp.get<any>(`${this.urlBase}/${id}`).pipe(
      map(response => ({
        id: response.data.id,
        name: response.data.name,
        updated_at: response.data.updated_at,
        created_at: response.data.created_at
      }))
    );
  }
  editAutor(id: number, autor: Autor): Observable<object> {
    return this.clientHttp.put<any>(`${this.urlBase}/${id}`, autor);
  }

  deleteAutor(id: number): Observable<Object> {
    return this.clientHttp.delete(`${this.urlBase}/${id}`);
  }
}

