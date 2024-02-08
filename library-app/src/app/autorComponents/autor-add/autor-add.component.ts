import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Autor } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autor-add',
  templateUrl: './autor-add.component.html',
  styleUrls: ['./autor-add.component.css']
})
export class AutorAddComponent {
  autor: Autor = new Autor();
  constructor(private service: AutorService, private router: Router) { }

  onSubmit() {
    this.addAutor();
  }
  addAutor() {
    this.service.addAutor(this.autor).subscribe({
      next: (data) => {
        this.redirectListAutors();
      },
      error: (error: any) => {
        console.log(error)
      }
    });
  }
  redirectListAutors() {
    this.router.navigate(['/autors'])
  }

}
