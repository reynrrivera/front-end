import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre, Item } from './item.type';
import { movies } from './movies.data';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  images: Genre[] = Object.assign(movies)
  // movieid: number;

  constructor(
    public router: Router,
    public route: ActivatedRoute
    ){
  }

  onClick(movieId: number, movieIdGenre: string, nameMovie: string, descriptionMovie: string, movieTrailer: string): void{
    this.router.navigate(['moviedetails'], {queryParams: {id: movieId, movieGenre: movieIdGenre, movieName: nameMovie, movieDescription: descriptionMovie, trailer: movieTrailer}});
  }

}
  
