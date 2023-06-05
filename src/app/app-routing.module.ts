import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./components/pages/movie-list/movie-list.module').then(m => m.MovieListModule) },
{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
{ path: 'movie-list', loadChildren: () => import('./components/pages/movie-list/movie-list.module').then(m => m.MovieListModule) },
{ path: 'movie-details/:id', loadChildren: () => import('./components/pages/movie-details/movie-details.module').then(m => m.MovieDetailsModule) }, 
{ path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
{ path: 'search', loadChildren: () => import('./components/pages/search/search.module').then(m => m.SearchModule) },
{ path: 'reser', loadChildren: () => import('./components/pages/reser/reser.module').then(m => m.ReserModule) },
{ path: '**', loadChildren: () => import('./components/pages/notFound/not-found.module').then(m => m.NotFoundModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
