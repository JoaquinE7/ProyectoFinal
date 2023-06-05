import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterLink } from '@angular/router';
import { AboutModule } from 'src/app/components/pages/about/about.module';
import { SearchModule } from 'src/app/components/pages/search/search.module';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    AboutModule,
    SearchModule
  ],
  exports:[
    NavComponent
  ]
})
export class NavModule { }
