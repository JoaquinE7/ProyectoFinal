import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatCardModule   
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
