import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {DataService, MovieDbService} from "../../services";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  page: number;

  constructor(private movieDbService: MovieDbService,
              private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
  ) {


  }

  ngOnInit(): void {
    this.dataService.page.subscribe(value => this.page = value);
  }

  prevPage(pageNumber: number) {
    this.page -= 1;
    pageNumber = this.page;
    this.movieDbService.getMovies(pageNumber).subscribe(({results, page}) => {
      this.dataService.storage.next(results);
      this.dataService.page.next(pageNumber);
      this.router.navigate(['movies/' + this.page])
    })

  }

  nextPage(pageNumber: number) {
    this.page += 1;
    pageNumber = this.page;
    this.movieDbService.getMovies(pageNumber).subscribe(({results, page}) => {
      this.dataService.storage.next(results);
      this.dataService.page.next(pageNumber);
      this.router.navigate(['movies/' + this.page])
    })
  }
}
