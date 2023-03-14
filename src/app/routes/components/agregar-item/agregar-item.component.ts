import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { FirestoreService } from '../../../services/firestore.service';

@Component({
  selector: 'app-agregar-item',
  templateUrl: './agregar-item.component.html',
  styleUrls: ['./agregar-item.component.css'],
  providers: [MoviesService, FirestoreService]
})
export class AgregarItemComponent {

  movies_series: any[] = []; 

  constructor(
    private _moviesService: MoviesService,
    private _firestoreService: FirestoreService
  ){
  }

  ngOnInit() : void {
    this.getTrendingAll();
  }

  getTrendingAll() {
    this._moviesService.getTrending().subscribe({
      next: (data) => {
        console.log(data);
        this.movies_series = data.results;
        for (const element of this.movies_series) {
          element.poster_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face/' + element.poster_path;
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  async addItem(newItem: number) {
    // console.log('Pelicula para agregar', newItem);
    // let peliculaParaAgregar = this.movies_series.find(movie => movie.id == newItem);
    // console.log('Pelicula encontrada', peliculaParaAgregar);

    // this._firestoreService.create(peliculaParaAgregar);
    console.log(await this._firestoreService.delete(newItem));
  }

  obtenerPeliculasGuardadas() {
    this._firestoreService.getAll().subscribe({
      next: (data) => {
        console.log(data)
      }
      })
    }
}
