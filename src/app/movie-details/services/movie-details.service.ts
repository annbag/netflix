import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/movie-list/interfaces/movie-list.interface';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MovieDetailsService {

    constructor(private http: HttpClient) { }

    getMovieDetails(id: string) {
        return this.http.get<Movie>(`${environment.movieListURL}/${id}`)
    }
}
