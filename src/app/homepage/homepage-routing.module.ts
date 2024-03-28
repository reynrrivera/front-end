import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { MoviedetailsComponent } from './body/moviedetails/moviedetails.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,

    loadChildren: ()=> import ('./body/body.module').then(m=>m.BodyModule)
    
  },

  {
    path: 'moviedetails',
    component: MoviedetailsComponent,

    loadChildren: ()=> import ('./body/moviedetails/moviedetails.module').then(m=>m.MoviedetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
