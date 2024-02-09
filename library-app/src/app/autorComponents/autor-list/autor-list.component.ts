import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Autor } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.css']
})
export class AutorListComponent {
  autors: Autor[] = [];
  constructor(private service: AutorService,
    private router: Router) {
  }
  ngOnInit() {
    this.obtainAutors();
  }
  private obtainAutors() {
    this.service.obtainAutorList().subscribe(
      ((data) => {
        this.autors = data;
      })
    );
  }
  editAutor(id: number) {
    this.router.navigate(['edit-autor', id])
  }
  deleteAutor(id: number) {
    this.service.deleteAutor(id).subscribe({
      next: (data) => this.obtainAutors(),
      error: (error: any) => console.log(error)
    });
  }
}

