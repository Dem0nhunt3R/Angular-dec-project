import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {MenuComponent, RightSideBarComponent, UserInfoComponent} from './components';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {AppRoutingModule} from "./app-routing.module";
import {MoviesModule} from "./modules/movies/movies.module";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MenuComponent,
    RightSideBarComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
