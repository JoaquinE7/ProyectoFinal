import { Component } from '@angular/core';
import { reser } from 'src/app/shared/interfaces/movieInterface';

@Component({
  selector: 'app-reser',
  templateUrl: './reser.component.html',
  styleUrls: ['./reser.component.css']
})
export class ReserComponent {
  title='Reservas'
  reservaciones!: string[]
  i!: number
  lista: reser[] = []

  constructor(){
    this.reservaciones = JSON.parse(localStorage.getItem("reservas")  || '[]')

    for(this.i = 0; this.i < this.reservaciones.length; this.i++){
      this.lista.push(JSON.parse(this.reservaciones[this.i]))
    }

    console.log(this.lista)
  }
}
