import { Component } from '@angular/core';
import { movies } from 'src/app/shared/interfaces/movieInterface';
import { MovieDatService } from 'src/app/shared/services/movie-dat.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  public pelis:any;
  public moviesInterface:movies[]=[];
 
  constructor(private movies: MovieDatService){
    //this.pelis=await movies.getAll();
  }
 async ngOnInit(){
    this.pelis=await this.movies.getAll();
    for (let i = 0; i < this.pelis.results.length; i++) {
      
      this.moviesInterface.push({id:this.pelis.results[i].id,
                                 cnt:0,
                                 img:this.pelis.results[i].poster_path,
                                 resumen:this.pelis.results[i].overview,
                                 nombre:this.pelis.results[i].title,
                                 gender:this.pelis.results[i].genre_ids,
                                 layla:false});
    
    }
    this.movies.setInterface(this.moviesInterface);
  }

  
}
