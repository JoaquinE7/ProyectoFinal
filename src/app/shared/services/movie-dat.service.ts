import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { movies } from '../interfaces/movieInterface';


@Injectable({
  providedIn: 'root'
})
export class MovieDatService {

  //variables
  private idMov:any;
  private movies:movies[]=[];
  //private movie:movies=[{}];



  //querys 
  
  
  /*get all*/
  private url='https://api.themoviedb.org/3/discover/movie';
  private params=new HttpParams()
  .set('api_key','deac55940070a556dc5de0926a7080b5')
  .set('page',1)
  .set('language','es-ES');

  private httpOptions={
    headers: new HttpHeaders({
      'Accept':'aplication/json',
    }),
    params:this.params
  };

  /*get Movie*/
  private urlMovie='https://api.themoviedb.org/3/movie/';
  private paramsMovie=new HttpParams()
  .set('api_key','deac55940070a556dc5de0926a7080b5')
  .set('language','es-ES');


  private httpOptionsM={
    headers: new HttpHeaders({
      'Accept':'aplication/json',
    }),
    params:this.paramsMovie
  };
  //functions

  constructor(private http:HttpClient) { }

  async getAll():Promise<any>{
    console.log('firus');
    return new Promise(resolve=>{
      this.http.get(this.url, this.httpOptions).subscribe(data=>{
        resolve(data);
      })
    })

  }
  /*
  async getMovie():Promise<any>{
    return new Promise(resolve=>{
      this.http.get(this.urlMovie+this.idMov, this.httpOptionsM).subscribe(data=>{


        resolve(data);
      })
    })
  }*/

  async getMovie(id:any):Promise<any>{
    return new Promise(resolve=>{
      this.http.get(this.urlMovie+id, this.httpOptionsM).subscribe(data=>{


        resolve(data);
      })
    })
  }


  setIdMovie(id:any):void{
    this.idMov=id;
  }
  getIdMovie():number{
    return this.idMov;
  }

  setInterface(dat:movies[]): void{
    this.movies=dat;
  }
  getInterface():movies[]{
    return this.movies;
  }
}
