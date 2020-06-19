import { Component, OnInit } from '@angular/core';
import { MovieProfileService } from '../../services/movie-details.service';
import { Movie } from 'src/app/movie-list/interfaces/movie-list.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
}
