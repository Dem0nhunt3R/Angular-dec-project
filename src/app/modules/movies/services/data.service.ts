import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IGenre, IMovie} from "../../../models";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storage = new BehaviorSubject<IMovie[]>([]);
  page = new BehaviorSubject(1);
  genre = new BehaviorSubject<IGenre>({name:'',id:0});
  genres = new BehaviorSubject<IGenre[]>([]);
  check = new BehaviorSubject<string>('light');

  constructor() {
  }
}
