import { Component, ViewChild } from '@angular/core';
import { movies } from '../../interfaces/movieInterface';
import { MovieDatService } from '../../services/movie-dat.service';
import { SaharedDatService } from '../../services/shared-dat/sahared-dat.service';
import { Router } from '@angular/router';
import { SearchComponent } from 'src/app/components/pages/search/search.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  movies:movies[]=[];
  results:movies[]=[];

  busqueda:string="";
  palabrascalve:string[]=[];

  @ViewChild(SearchComponent)
  CNDH!: SearchComponent;


  constructor(private moviesDat: MovieDatService,private shared: SaharedDatService,private router: Router){

  }
  search():void{
    this.results=[];
    this.movies=[];

    this.busqueda=(document.getElementById('firus') as HTMLInputElement).value;
    this.movies=this.moviesDat.getInterface();
    this.palabrascalve=this.busqueda.split(" ");
    this.buscarPal();
    
    
  }
  buscarPal():void{
    let firus:string=""
    for (const i in this.movies) { 
      firus=this.movies[i].nombre.toUpperCase();
      for (const j in this.palabrascalve) {
       
        if (firus.includes(this.palabrascalve[j].toUpperCase())) {
            this.movies[i].cnt++;
          
        }
      }
    } 
    console.log("firus");
    this.asignarResult();
  }

  asignarResult():void{
    for (const i of this.movies) {
      if (i.cnt>0) {
        this.results.push(i);
        
      }
      
    }
    //----ESTA MIERDA NO DEBERIA ESTAR AQUÍ. ¡MALDITA SEA, ANGULAR! ¡¿QUÉ HAS HECHO?¡
    for (const i in this.movies) {
      this.movies[i].cnt=0;
    }
    //
    this.ordenar()
  }
  
  ordenar():void{
    let aux:movies={id:0,cnt:0,img:"",resumen:"",nombre:"",gender:[],layla:false};
    for (let i = 0; i < this.results.length; i++) {
      for (let j = i; j< this.results.length; j++) {
        if(this.results[j].cnt>this.results[i].cnt){
          aux=this.results[i];
          this.results[i]=this.results[j];
          this.results[j]=aux;
        }
      }
      
    }
    
    console.log(this.shared);
    this.shared.setMovies(this.results);
    
    this.recargar();
  }
  recargar() {
    console.log('balto');

    this.router.navigateByUrl('', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/search']);
      });
  }

}
