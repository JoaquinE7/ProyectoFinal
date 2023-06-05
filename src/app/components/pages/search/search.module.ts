import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { MovieCardModule } from '../movie-card/movie-card.module';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MovieCardModule,
  ], 
  exports:[
    SearchComponent
  ]
})
export class SearchModule { }
