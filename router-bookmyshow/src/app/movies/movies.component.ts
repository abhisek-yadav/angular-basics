import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies =  this.moviesService.movies;
  }

}
