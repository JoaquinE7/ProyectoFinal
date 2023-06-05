import { Injectable } from '@angular/core';

import { AngularFireDatabase,AngularFireList } from '@angular/fire/compat/database';
import { PelisReser } from '../../models/PelisReser';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private dbPlReser='/pelis'
  pelis:AngularFireList<any>

  constructor(private db: AngularFireDatabase) {
    this.pelis=db.list(this.dbPlReser); 

    
  }

  getall():AngularFireList<any>{
    return this.pelis;
  }

  create(peli:any){
    return this.pelis.push(peli);

  }
  delete(id:any):Promise<void>{
    return this.pelis.remove(id)
  }
}
