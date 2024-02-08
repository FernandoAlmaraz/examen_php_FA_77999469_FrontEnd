import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-cliend-add',
  templateUrl: './cliend-add.component.html',
  styleUrls: ['./cliend-add.component.css']
})
export class CliendAddComponent {
  client: Client = new Client();
  constructor(private service: ClientService, private router: Router) { }
  onSubmit() {
    this.addClient();
  }
  addClient() {
    this.service.addClient(this.client).subscribe({
      next: (data) => {
        this.redirectListAutors();
      },
      error: (error: any) => {
        console.log(error)
      }
    });
  }
  redirectListAutors() {
    this.router.navigate(['/clients'])
  }
}
