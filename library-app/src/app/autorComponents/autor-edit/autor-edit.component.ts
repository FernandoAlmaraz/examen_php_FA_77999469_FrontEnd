import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autor-edit',
  templateUrl: './autor-edit.component.html',
  styleUrls: ['./autor-edit.component.css']
})
export class AutorEditComponent {
  autor: Autor = new Autor();
  id: number = 0;
  constructor(private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.autorService.obtainAutorById(this.id).subscribe(
      {
        next: (data) => this.autor = data,
        error: (error: any) => console.log(error)
      });
    console.log(this.autor)
  }
  onSubmit() {

  }

}
