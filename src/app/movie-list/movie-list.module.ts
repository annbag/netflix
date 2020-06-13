import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [MovieListComponent],
  exports: [MovieListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class MovieListModule { }
