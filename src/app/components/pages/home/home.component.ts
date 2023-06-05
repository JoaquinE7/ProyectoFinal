import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  video:string = '53OkQk2sdTc';
  falg:boolean=false;

  changeFlag(newItem: string){
    setTimeout(() => {
      this.falg=!this.falg;
    }, 3000);
    
  }

}
