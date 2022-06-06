import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movies-list',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

}
