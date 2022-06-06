import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {IGenre} from "../../models";
import {MovieDbService} from "../../modules/movies/services";


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  form: FormGroup;
  genres: IGenre[];

  constructor(private movieDbService: MovieDbService) {
    this.form = new FormGroup({
      chosenGenre: new FormControl()
    });
  }

  ngOnInit(): void {
    this.movieDbService.getGenres().subscribe(({genres}) => this.genres = genres)
  }

  toggle() {
        let body = document.body;
        let p = document.getElementsByTagName('p');
        let i = document.getElementsByTagName('i');
        let span = document.getElementsByTagName('span');

        body.classList.toggle('dark-mode-body')

        // @ts-ignore
        for (const e of p) {
          e.classList.toggle('dark-mode')
        }
        // @ts-ignore
        for (const e of i) {
          e.classList.toggle('dark-mode')
        }
        // @ts-ignore
        for (const e of span) {
          e.classList.toggle('dark-mode')
        }
      }

}
