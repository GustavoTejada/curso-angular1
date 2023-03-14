import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Trending } from 'src/app/shared/interfaces/Trending.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [MoviesService]
})

export class InicioComponent {
  movies_series : any = {};

  selected: string = 'Todos';

  paraBuscar: string = '';

  constructor(
    private _moviesService: MoviesService,
  ) {
  }

  ngOnInit() : void {
    this.getTrendingAll();
  }

  getTrendingAll() {
    this._moviesService.getTrending().subscribe({
      next: (data) => {
        this.movies_series = data;
        for (const element of this.movies_series.results) {
          element.poster_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face/' + element.poster_path;
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  cambiarCategoria(value: string) {
    this.selected = value;
    if (value == 'tv') {
      // this.getTv();
    } else if (value == 'movie') {
      // this.getMovies();
    } else {
      // this.getTrendingAll();
    }
  }

  buscar(value: string) {
    console.log(value);
  }

  // async addtoFirestore() {
  //   const response = await this._firestoreService.create({
  //     name: 'pedrito',
  //     director: 'juancho'
  //   });
  //   console.log(response);
  // }

  // getAllfromFirestore() {
  //   this._firestoreService.getAll().subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     }
  //   })
  // }

}
