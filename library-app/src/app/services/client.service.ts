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
      .pipe(map
        (response => response.data.map((client: Client) => ({
          id: client.id,
          name: client.name,
          email: client.email,
          cellphone: client.cellphone,
          id_card: client.id_card,
          updated_at: client.updated_at ? this.formater.formatDate(new Date(client.updated_at)) : null,
          created_at: client.created_at ? this.formater.formatDate(new Date(client.created_at)) : null
        })))
      );
  }
  addClient(client: Client): Observable<Client> {
    return this.clientHttp.post<Client>(this.urlBase, client);
  }
  deleteClient(id: number): Observable<Object> {
    return this.clientHttp.delete(`${this.urlBase}/${id}`);
  }
}

