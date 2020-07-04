import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movie-list/interfaces/movie-list.interface';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

    @Input() movie: Movie = null;
    
    constructor() { }

    ngOnInit() {
    }

}
