import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { ShowEditComponent } from './shows/show-edit/show-edit.component';

const appRoutes1: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'shows', component: ShowsComponent },
];

@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      MoviesComponent,
      ShowsComponent,
      MovieEditComponent,
      ShowEditComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes1)
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
export class AppModule { }
