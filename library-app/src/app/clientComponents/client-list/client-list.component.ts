import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  clients: Client[] = [];
  constructor(private service: ClientService, private router: Router) {
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
  editClient(id: number) {
    this.router.navigate(['edit-client', id])
  }
  deleteClient(id: number) {
    this.service.deleteClient(id).subscribe({
      next: (data) => this.obtainClients(),
      error: (error: any) => console.log(error)
    });
  }

}
