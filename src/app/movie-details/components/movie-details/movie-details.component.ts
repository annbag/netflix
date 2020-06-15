import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from '../../services/movie-details.service';
import { Movie } from 'src/app/movie-list/interfaces/movie-list.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

    movieDetails: Movie;

    constructor(
        private movieDetailsService: MovieDetailsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.loadMovieDetails();
    }

    loadMovieDetails() {
        const id = this.route.snapshot.params.id;
        this.movieDetailsService.getMovieDetails(id).subscribe({
            next: (movieDetails) => {
                this.movieDetails = movieDetails;
            }
        })
    }
}
