import { Component } from '@angular/core';
import { Autor } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.css']
})
export class AutorListComponent {
  autors: Autor[] = [];
  constructor(private service: AutorService) {
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
}

