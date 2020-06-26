import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [MovieDetailsComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})

export class MovieDetailsModule { }
