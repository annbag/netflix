import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import {MovieProfileComponent} from '../movie-profile/pages/movie-profile/movie-profile.component'

const routes: Routes = [
    {
        path: '',
        component: MovieProfileComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MovieProfileRoutingModule { }
