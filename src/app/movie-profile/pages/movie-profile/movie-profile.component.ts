import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie-list/interfaces/movie-list.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieProfileService } from '../../services/movie-profile.service';

@Component({
    selector: 'app-movie-profile',
    templateUrl: './movie-profile.component.html',
    styleUrls: ['./movie-profile.component.scss']
})
export class MovieProfileComponent implements OnInit {

    movie: Movie;

    constructor(
        private movieProfileService: MovieProfileService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.loadMovie();
    }

    private loadMovie() {
        const id = this.route.snapshot.params.id;
        this.movieProfileService.getMovie(id).subscribe({
            next: (movie) => {
                console.log(movie);
                this.movie = movie;
            },
            error: () => {
                this.router.navigate(['not-found']);
            }
        });
    }    
}
