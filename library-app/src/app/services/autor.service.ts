import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor';
@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private urlBase = "http://localhost:8000/api/v1/autors"
  constructor(private clientHttp: HttpClient) { }

  obtainAutorList(): Observable<Autor[]> {
    return this.clientHttp.get<any>(this.urlBase)
      .pipe(map
        (response => response.data.map((autor: Autor) => ({
          id: autor.id,
          name: autor.name,
          updated_at: autor.updated_at,
          created_at: autor.created_at
        })))
      );
  }

  addAutor(autor: Autor): Observable<Autor> {
    return this.clientHttp.post<Autor>(this.urlBase, autor);
  }
}
