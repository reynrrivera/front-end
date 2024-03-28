import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    RouterModule,
  ],
  exports:[
  ]
})
export class HomepageModule { }
