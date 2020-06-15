import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'movie/:id',
        loadChildren: () => import('../movie-details/movie-details.module').then(m => m.MovieDetailsModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
