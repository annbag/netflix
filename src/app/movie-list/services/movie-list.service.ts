import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieList } from '../interfaces/movie-list.interface';


@Injectable({
    providedIn: 'root'
})
export class MovieListService {

    constructor(private http: HttpClient) { }

    getMovieList() {
        return this.http.get<MovieList>(environment.movieListURL);
    }
}
