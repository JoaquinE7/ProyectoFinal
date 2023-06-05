import { Component } from '@angular/core';
import { MovieDatService } from 'src/app/shared/services/movie-dat.service';
import { ActivatedRoute } from '@angular/router';

import { reser } from 'src/app/shared/interfaces/movieInterface';
import { SaharedDatService } from 'src/app/shared/services/shared-dat/sahared-dat.service';
//import { AlertifyService } from 'src/app/shared/services/alertify.service';
declare let alertify: any;

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  idMov: any;
  movie: any;
  rsr!: string;
  id: number = 0;
  lista!: string[];
  i!: number;
  habilitar: boolean = true;
  anio!: number;
  mes!: number;
  dia!: number;
  actual!: Date;
  res!: reser;
  devD!: number;
  devM!: number;
  devA!: number;
  constructor(
    private movies: MovieDatService,
    private getmovie: SaharedDatService,
    private route: ActivatedRoute
  ) {
    //this.id=this.movies.getIdMovie();
    //this.movie=this.getmovie.getMoviebyId(this.id);
  }
  async ngOnInit() {
    this.idMov = this.route.snapshot.paramMap.get('id');

    this.movie = await this.movies.getMovie(this.idMov);
  }

  verificar(): boolean {
    this.lista = JSON.parse(localStorage.getItem('reservas') || '[]');
    if (this.lista.length == 0) {
      return true;
    } else {
      for (this.i = 0; this.i < this.lista.length; this.i++) {
        if (JSON.parse(this.lista[this.i]).peli == this.movie.original_title) {
          this.devD = JSON.parse(this.lista[this.i]).diaD;
          this.devM = JSON.parse(this.lista[this.i]).mesD;
          this.devA = JSON.parse(this.lista[this.i]).anioD;
          return false;
        }
      }
    }
    return true;
  }

  verFecha(): void {
    this.anio = Number.parseFloat(this.rsr.slice(0, 4));
    this.mes = Number.parseFloat(this.rsr.slice(5, 7));
    this.dia = Number.parseFloat(this.rsr.slice(8, 10));

    this.actual = new Date();
    this.habilitar = true;

    if (this.anio > this.actual.getFullYear()) {
      this.habilitar = false;
      this.runDate()
    } else if (
      this.anio == this.actual.getFullYear() &&
      this.mes > this.actual.getMonth() + 1
    ) {
      this.habilitar = false;
      this.runDate()
    } else if (
      this.anio == this.actual.getFullYear() &&
      this.mes == this.actual.getMonth() + 1 &&
      this.dia >= this.actual.getDate()
    ) {
      this.habilitar = false;
      this.runDate()
    }
    if(this.habilitar){
      this.runError()
    }
  }

  agregar(): void {
    this.lista = JSON.parse(localStorage.getItem('reservas') || '[]');
    this.runSucces();

    if (this.mes === 2 && this.dia === 29 || this.dia === 28){
      this.dia = 1
      this.mes = this.mes + 1
    }else if(this.dia + 1 > 30 && this.mes + 1 > 12 ) {
      this.dia = 1
      this.mes = 1
      this.anio = this.anio + 1
    }else if(this.dia + 1 > 30){
      this.dia = 1
      this.mes = this.mes + 1
    }

    

    
    this.res = {
      peli: this.movie.original_title,
      diaD: this.dia,
      mesD: this.mes,
      anioD: this.anio,
      diaR: this.actual.getDate(),
      mesR: this.actual.getMonth(),
      anioR: this.actual.getFullYear(),
      poster: this.movie.poster_path,
      pop: this.movie.vote_average,
    };
    this.lista.push(JSON.stringify(this.res));
    localStorage.setItem('reservas', JSON.stringify(this.lista));
  }

  runSucces(): void {
    alertify.success('La pelicula se reservo con exito');
  }

  runError(): void {
    alertify.error('Seleccione una fecha no pasada');
  }

  runDate():void{
    alertify.success("Fecha valida")
  }
}
