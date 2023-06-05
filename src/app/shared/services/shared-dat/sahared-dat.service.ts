import { Injectable } from '@angular/core';
import { movies } from '../../interfaces/movieInterface';

@Injectable({
  providedIn: 'root'
})
export class SaharedDatService {

  constructor() { }
  private movies:movies[]=[]
  setMovies(mov:movies[]){
    this.movies=mov;
  }
  getMovies():movies[]{
    return this.movies;
  }
  getMoviebyId(id:number):any{
    for (const i in this.movies) {
      if (this.movies[i].id==id) {
          return this.movies[i];
          break;
        
      }
    }

  }

}
