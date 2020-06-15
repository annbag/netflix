import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieListModule } from '../movie-list/movie-list.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    MovieListModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
