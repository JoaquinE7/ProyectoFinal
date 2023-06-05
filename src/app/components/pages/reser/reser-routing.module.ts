import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReserComponent } from './reser.component';

const routes: Routes = [{ path: '', component: ReserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReserRoutingModule { }
