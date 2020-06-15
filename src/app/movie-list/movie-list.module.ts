import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './components/movie/movie.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieListComponent, MovieComponent],
  exports: [MovieListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class MovieListModule { }
