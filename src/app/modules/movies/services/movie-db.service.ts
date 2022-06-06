import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {apiKey, urls} from "../../../constants";
import {IGenreResponse, IMovieDetails, IMoviesResponse} from "../../../models";

@Injectable({
  providedIn: 'root'
})
export class MovieDbService {

  constructor(private httpClient: HttpClient) {
  }

  getMovies(pageNumber: number): Observable<IMoviesResponse> {
    return this.httpClient.get<IMoviesResponse>(urls.movies + '&page=' + pageNumber);
  };

  getMovieById(id: number): Observable<IMovieDetails> {
    return this.httpClient.get<IMovieDetails>(`${urls.movie}${id}?api_key=${apiKey}`);
  }

  getGenres(): Observable<IGenreResponse> {
    return this.httpClient.get<IGenreResponse>(urls.genres);
  }

  getMoviesByGenre(genreId: number, pageNumber: number): Observable<IMoviesResponse> {
    return this.httpClient.get<IMoviesResponse>(urls.movies + '&page=' + pageNumber + '&with_genres=' + genreId)
  }
}
