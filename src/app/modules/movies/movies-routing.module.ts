import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {DataService, MovieDbService} from "./services";


const routes: Routes = [
  {
    path: '', component: MoviesListComponent, children: [
      {path: ':pageNumber', component: MoviesComponent},
      {path: ':pageNumber/:id', component: MovieDetailsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    DataService,
    MovieDbService
  ]
})
export class MoviesRoutingModule {
}
