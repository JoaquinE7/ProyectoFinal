import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphRoutingModule } from './graph-routing.module';
import { GraphComponent } from './graph.component';
import { FirebaseService } from 'src/app/shared/services/firebase/firebase.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    GraphComponent
  ],
  imports: [
    CommonModule,
    GraphRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers:[
    FirebaseService
  ]
})
export class GraphModule { }
