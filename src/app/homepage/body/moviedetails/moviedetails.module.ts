import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviedetailsRoutingModule } from './moviedetails-routing.module';
import { MoviedetailsComponent } from './moviedetails.component';
import { ModalComponent } from './modal.component';
import { SafePipe } from './pipe/safe.pipe';


@NgModule({
  declarations: [
    MoviedetailsComponent,
    ModalComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    MoviedetailsRoutingModule
  ],
  exports:[
  ]
})
export class MoviedetailsModule { }
