import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from '@angular/fire/compat'


import { RegistRoutingModule } from './regist-routing.module';
import { RegistComponent } from './regist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [ 
    RegistComponent
  ],
  imports: [
    CommonModule,
    RegistRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ]
})
export class RegistModule { }
