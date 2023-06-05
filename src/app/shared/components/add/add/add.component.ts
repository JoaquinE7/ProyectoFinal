import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  cerrado = true;

  @Input() imgs="";
  @Input() url="";
  @Input() cl="";

  @Output() anuncio = new EventEmitter<string>();

  ngOnInit() {
    setTimeout(() => {
      this.cerrado = false;
    }, 5000);
  }

  cerrar() {

   
    this.cerrado = true;
    this.anuncio.emit("");
  }
}