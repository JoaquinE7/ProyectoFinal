import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './movie-list.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MovieCardModule } from '../movie-card/movie-card.module';


@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MovieListRoutingModule,
    MovieCardModule
  ]
})
export class MovieListModule { }
