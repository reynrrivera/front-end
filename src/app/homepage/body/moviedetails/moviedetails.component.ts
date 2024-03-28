import { Component } from '@angular/core';
import { Genre, Item } from '../item.type';
import { movies } from '../movies.data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent {
  images: Genre[] = Object.assign(movies)
  constructor(private route: ActivatedRoute){

  }
  
  movieTrailer(){
    console.log('Movie Trailer Works!')
  }
  movie: any;
  movieId: any;
  genre = '';
  movieTitle = '';
  trailer: any;
  movieDesc = '';

  ngOnInit(){
    this.route.queryParams.subscribe((params) => {
      const movieId = params['id'];
      const movieIdGenre = params['movieGenre'];
      const movieName = params['movieName'];
      const movieDesc = params['movieDescription'];
      const trailer = params['trailer'];
      this.trailer = trailer;
      this.movieDesc = movieDesc;
      this.movieTitle = movieName; 
      this.movieId = movieId;
      this.genre = movieIdGenre;
    })
   this.images.find((genre)=>{
      console.log(genre);
      if(this.genre == genre.genreName){
        genre.item.find((movie)=>{
          console.log(movie);
          if(this.movieId == movie.id){
            this.movie = movie
            return;
          }
        })
      }
    })
    console.log(this.movie)
  }
}
