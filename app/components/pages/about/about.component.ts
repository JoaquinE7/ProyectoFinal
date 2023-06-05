import { Component } from '@angular/core';
import { DatosService, jsjsjs } from 'src/app/shared/services/datos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  newDatos: jsjsjs[] = []
  ask: string = "prueba"
  constructor(private datos: DatosService){
    this.newDatos = datos.datos
  }
}
