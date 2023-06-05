import { Component, Input } from '@angular/core';
import { MovieDatService } from 'src/app/shared/services/movie-dat.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() nombre:string="";
  @Input() img:string="";
  @Input() resumen:string="";
  @Input() id:number=0;


  constructor(private serv: MovieDatService){

  }

  setid(){
    this.serv.setIdMovie(this.id);
  }
}
