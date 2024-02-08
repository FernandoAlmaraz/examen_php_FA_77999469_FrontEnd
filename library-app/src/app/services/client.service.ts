import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from '../models/client';
import { DateFormaterService } from './date-formater.service';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlBase = "http://localhost:8000/api/v1/clients"
  constructor(private clientHttp: HttpClient,
    private formater: DateFormaterService) { }
  obtainClientList(): Observable<Client[]> {
    return this.clientHttp.get<any>(this.urlBase)
      .pipe(
        map((response: any) => {
          if (response && response.data && Array.isArray(response.data)) {
            return response.data.map((client: any) => ({
              id: client.id,
              name: client.name,
              email: client.email,
              cellphone: client.cellphone,
              id_card: client.id_card,
              updated_at: client.updated_at ? this.formater.formatDate(new Date(client.updated_at)) : null,
              created_at: client.created_at ? this.formater.formatDate(new Date(client.created_at)) : null
            }));
          } else {
            return ["No se encontraron registros"];
          }
        })
      );
  }
  addClient(client: Client): Observable<Client> {
    return this.clientHttp.post<Client>(this.urlBase, client);
  }
  obtainClientById(id: number): Observable<Client> {
    return this.clientHttp.get<any>(`${this.urlBase}/${id}`).pipe(
      map(response => ({
        id: response.id || response?.id,
        name: response.name || response?.name,
        email: response.email || response?.email,
        cellphone: response.cellphone || response?.cellphone,
        id_card: response.id_card || response?.id_card,
        updated_at: response?.data?.updated_at || null,
        created_at: response?.data?.created_at || null
      }))
    );
  }
  editClient(id: number, client: Client): Observable<object> {
    return this.clientHttp.put<any>(`${this.urlBase}/${id}`, client);
  }
  deleteClient(id: number): Observable<Object> {
    return this.clientHttp.delete(`${this.urlBase}/${id}`);
  }
}

