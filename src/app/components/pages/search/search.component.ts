import { Component, OnChanges, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { movies } from 'src/app/shared/interfaces/movieInterface';
import { MovieDatService } from 'src/app/shared/services/movie-dat.service';
import { SaharedDatService } from 'src/app/shared/services/shared-dat/sahared-dat.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges, OnInit{
  constructor(private movies:SaharedDatService,private r:MovieDatService){

  }
  result:movies[]=[]
  firus:movies[]=[]
  ngOnInit(){
    this.result=this.movies.getMovies();

  }
  ngOnChanges(){

  }
 
  
}
