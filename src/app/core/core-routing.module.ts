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
    },
    {
        path: 'not-found',
        loadChildren: () => import('../not-found/not-found.module').then(m => m.NotFoundModule)
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
