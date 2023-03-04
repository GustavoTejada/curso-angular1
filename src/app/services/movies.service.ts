import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trending } from '../shared/interfaces/Trending.interface';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  api_key = '77d4bdd91e70e1c691bc265726ebb489';

  base_url = 'https://api.themoviedb.org/3';

  constructor(
    private _http: HttpClient,
  ) { }

  getTrending(): Observable<Trending> {
    return this._http.get<Trending>(this.base_url + '/trending/all/week', {
      params: {
        api_key: this.api_key,
        language: 'es-ES'
      }
    })
  }

  getMovies(): Observable<any> {
    return this._http.get(this.base_url + '/movie/popular', {
      params: {
        api_key: this.api_key,
        language: 'es-ES'
      } ,
    })
  }

  getSeries(): Observable<any> {
    return this._http.get(this.base_url + '/tv/popular', {
      params: {
        api_key: this.api_key,
        language: 'es-ES'
      },
    })
  }
}
