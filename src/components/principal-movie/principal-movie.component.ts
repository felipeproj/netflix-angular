import { Component, OnInit } from '@angular/core';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-principal-movie',
    templateUrl: './principal-movie.component.html',
    styleUrls: ['./principal-movie.component.scss']
})
export class PrincipalMovieComponent {
    faPlay = faPlay;
    faInfoCircle = faInfoCircle;
}
