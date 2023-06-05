import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { CardModule } from 'src/app/shared/components/card/card/card.module';
import { FormModule } from 'src/app/shared/components/form/form/form.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    CardModule,
    FormModule,
  ],
  exports:[
    AboutComponent
  ]
})
export class AboutModule { }
