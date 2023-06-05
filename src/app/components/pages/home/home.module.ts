import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DoomPipePipe } from 'src/app/shared/pipes/doom-pipe.pipe';
import { AddModule } from 'src/app/shared/components/add/add/add.module';


@NgModule({
  declarations: [
    HomeComponent,
    DoomPipePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AddModule
  ]
})
export class HomeModule { }
