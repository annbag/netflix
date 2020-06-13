import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './components/movie/movie.component';



@NgModule({
  declarations: [MovieListComponent, MovieComponent],
  exports: [MovieListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class MovieListModule { }
