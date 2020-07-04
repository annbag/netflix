import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Movie } from 'src/app/movie-list/interfaces/movie-list.interface';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

    @Input() movie: Movie = null;
    @ViewChild('video', { static: true }) $video: ElementRef<HTMLVideoElement> = null;

    constructor() { }

    ngOnInit() {
    }

    play() {
        this.$video.nativeElement.play()
    }

    pause() {
        this.$video.nativeElement.pause()
    }
    
    stop() {
        this.$video.nativeElement.pause()
        this.$video.nativeElement.currentTime = 0;
    }
}
