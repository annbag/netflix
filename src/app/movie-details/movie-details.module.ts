import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    HttpClientModule
  ]
})
export class MovieDetailsModule { }
