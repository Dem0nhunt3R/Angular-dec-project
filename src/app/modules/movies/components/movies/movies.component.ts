import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IMovie} from "../../../../models";
import {DataService, MovieDbService} from "../../services";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];

  constructor(private movieDbService: MovieDbService,
              private dataService: DataService,
              private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({pageNumber}) => {
      this.dataService.page.next(+pageNumber)
      this.movieDbService.getMovies(+pageNumber).subscribe(({results}) => this.movies = results)
      console.log('getMovies')
    });
  }
}
