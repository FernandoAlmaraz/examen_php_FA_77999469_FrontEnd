import { Component } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  clients: Client[] = [];
  constructor(private service: ClientService) {
  }
  ngOnInit() {
    this.obtainClients();
  }
  private obtainClients() {
    this.service.obtainClientList().subscribe(
      ((data) => {
        this.clients = data;
      })
    );
  }
  deleteClient(id: number) {
    this.service.deleteClient(id).subscribe({
      next: (data) => this.obtainClients(),
      error: (error: any) => console.log(error)
    });
  }
}
