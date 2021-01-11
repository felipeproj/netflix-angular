import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrincipalMovieComponent } from './principal-movie/principal-movie.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselMoviesComponent } from './carousel-movies/carousel-movies.component';

const components = [NavbarComponent, PrincipalMovieComponent, CarouselMoviesComponent];

@NgModule({
    declarations: components,
    imports: [ CommonModule, FontAwesomeModule, CarouselModule  ],
    exports: components,
    providers: [],
})
export class ComponentsModule {}