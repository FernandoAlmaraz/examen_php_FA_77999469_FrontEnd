import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent {
  client: Client = new Client();
  id: number = 0;
  constructor(private service: ClientService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.obtainClientById(this.id).subscribe(
      {
        next: (data) => this.client = data,
        error: (error: any) => console.log(error)

      });
    console.log(this.client)
  }
  onSubmit() {
    this.safeClient();
  }
  safeClient() {
    this.service.editClient(this.id, this.client).subscribe({
      next: (data) => this.goToListClients(),
      error: (error: any) => console.log(error)
    });
  }
  goToListClients() {
    this.router.navigate(['/clients']);
  }
}
