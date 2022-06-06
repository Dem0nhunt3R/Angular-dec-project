import {IGenre} from "./genre.interface";
import {CompaniesInterface} from "./companies.interface";
import {ICountries} from "./counties.interface";
import {ILanguage} from "./languages.interface";

export interface IMovieDetails {
  backdrop_path: string;
  poster_path:string;
  budget: number;
  genres: IGenre[];
  original_language: string;
  original_title: string;
  overview: string;
  production_companies: CompaniesInterface[];
  production_countries: ICountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ILanguage[];
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}
