import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from '@angular/fire/compat'

import { SinginRoutingModule } from './singin-routing.module';
import { SinginComponent } from './singin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    SinginComponent
  ],
  imports: [
    CommonModule,
    SinginRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ]
})
export class SinginModule { }
