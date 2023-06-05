import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReserRoutingModule } from './reser-routing.module';
import { ReserComponent } from './reser.component';
import { FirebaseService } from 'src/app/shared/services/firebase/firebase.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    ReserComponent
  ],
  imports: [
    CommonModule,
    ReserRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  
  ],
  providers:[
    FirebaseService,
  ]
})
export class ReserModule { }
