import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {PaginationComponent} from "./components/pagination/pagination.component";
import {StarsComponent} from "./components/stars/stars.component";
import {HeaderComponent} from "../../components";
import {MoviesRoutingModule} from "./movies-routing.module";
import {MovieComponent} from "./components/movie/movie.component";
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    HeaderComponent,
    MoviesListComponent,
    PaginationComponent,
    StarsComponent
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    NgbRatingModule,
  ]
})
export class MoviesModule { }
