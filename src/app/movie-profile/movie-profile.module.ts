import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieProfileComponent } from './pages/movie-profile/movie-profile.component';
import { MovieProfileRoutingModule } from './movie-profile-routing.module';
import { PlayerModule } from '../player/player.module';

@NgModule({
    declarations: [MovieProfileComponent],
    imports: [
        CommonModule,
        MovieProfileRoutingModule,
        PlayerModule
    ]
})
export class MovieProfileModule { }
