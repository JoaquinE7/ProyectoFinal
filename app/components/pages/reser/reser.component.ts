import { Component } from '@angular/core';
import { PelisReser } from 'src/app/shared/models/PelisReser';
import { FirebaseService } from 'src/app/shared/services/firebase/firebase.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reser',
  templateUrl: './reser.component.html',
  styleUrls: ['./reser.component.css']
})
export class ReserComponent {
  title='Reservas'
  reservaciones:any
  reserv:any;
  i!: number
  lista: any;
  pelis?:PelisReser;


  constructor(private bd:FirebaseService){

    this.bd.getall().snapshotChanges().pipe(
      map(change=>
          change.map(c=>
            ({
              id: c.payload.key,...c.payload.val()
            }))
        )
    ).subscribe(data=>
      {
        this.reservaciones=data;
        console.log(JSON.parse(this.reservaciones));
      }
      );
      
    //this.reserv = JSON.parse( this.reservaciones || '[]');
    //console.log(this.reservaciones);
    //this.reserv=bd.getall();
    /*for (const i of this.reserv) {
      this.lista.push(JSON.parse(i));
    }
    
    for(this.i = 0; this.i < this.reserv.length; this.i++){
      this.lista.push(JSON.parse(this.reserv[this.i]))
    }*/

    

    console.log(this.lista);
  }
}
