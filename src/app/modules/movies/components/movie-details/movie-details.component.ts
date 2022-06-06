import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IMovieDetails} from "../../../../models";
import {MovieDbService} from "../../services";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  rating: number;
  movieDetails: IMovieDetails;

  constructor(private route: ActivatedRoute, private movieDbService: MovieDbService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.movieDbService.getMovieById(id).subscribe(value => {
        this.movieDetails = value;
      })
    })
  }

}
