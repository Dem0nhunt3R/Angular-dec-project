import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'movies/1', pathMatch: 'full'},
      {
        path: 'movies',
        loadChildren: () => import('./modules/movies/movies.module').then(value => value.MoviesModule),
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
