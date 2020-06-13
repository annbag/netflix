import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../../services/movie-list.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

    constructor(private movieListService: MovieListService) { }

    ngOnInit() {
        this.loadMovieList();
    }

    loadMovieList() {
        this.movieListService.getMovieList().subscribe({
            next(x) {
                console.log('next', x);
            }
        });
    }
}
