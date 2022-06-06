import {environment} from "../../environments/environment";
import {apiKey} from "./key";

const {API} = environment;

export const urls = {
  movie:`${API}/movie/`,
  movies: `${API}/discover/movie?api_key=${apiKey}`,
  genres: `${API}/genre/movie/list?api_key=${apiKey}`
}
