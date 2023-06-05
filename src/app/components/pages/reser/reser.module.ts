import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReserRoutingModule } from './reser-routing.module';
import { ReserComponent } from './reser.component';


@NgModule({
  declarations: [
    ReserComponent
  ],
  imports: [
    CommonModule,
    ReserRoutingModule
  ]
})
export class ReserModule { }
