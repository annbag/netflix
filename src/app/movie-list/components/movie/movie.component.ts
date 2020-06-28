import { Component, OnInit, Input, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../../interfaces/movie-list.interface';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit {

    public isSelected: boolean;

    // @HostListener('mouseover') mouseoverHandler() {
        // this.isSelected = true;
    // }

    // @HostListener('mouseout') mouseoutHandler() {
        // this.isSelected = false;
    // }

    @Input() movie: Movie = null;
    constructor() { }

    ngOnInit() {
    }

    public displayInfoAboutPrice() {
        console.log('displayInfoAboutPrice')
        return this.movie.title.substr(-1) === 'a' ? 'darmowy' : 'płatny'
    }
}
