import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MovieListService } from '../../services/movie-list.service';
import { MovieList } from '../../interfaces/movie-list.interface';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements OnInit {
    movies: MovieList = [];

    constructor(private movieListService: MovieListService,
        private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.loadMovieList();
    }

    loadMovieList() {
        this.movieListService.getMovieList().subscribe({
            next: (movies) => {
                this.movies = movies;
                this.cdr.detectChanges();
            }
        });
    }
}
