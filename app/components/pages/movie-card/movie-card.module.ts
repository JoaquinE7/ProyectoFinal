import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
  ], 
  exports:[
    MovieCardComponent
  ]
})
export class MovieCardModule { 
 

}
