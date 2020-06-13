import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie-list.interface';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

    @Input() movie: Movie = null;
    constructor() { }

    ngOnInit() {
    }

}
