import { MoviesService } from './../../services/movies.service';

/**
 * Import the Component styles
 */
import './movies.container.scss';

class MoviesController {
  cinema: { cinemaId: string, cinemaName: string };
  movies: { id: number, filmName: string, filmSlug: string }[];

  constructor(
    private moviesService: MoviesService
  ) {
    'ngInject';
  }

  $onInit() {
    this.fetchData();
  }

  private fetchData() {
    this.moviesService.getCinema().then(
      cinema => {
        this.cinema = cinema;
      }
    );
    this.moviesService.getAllMovies()
      .then(movies => {
        this.movies = movies;
      });
  }
}

export class MoviesContainer implements angular.IComponentOptions {
  static selector = 'movies';
  static controller = MoviesController;
  static template = `
  <div class="row">
    <div class="col-md-12">
      <h1>Movies playing at {{ $ctrl.cinema.cinemaName }}</h1>
      <movies-list movies="$ctrl.movies"></movie-list>
    </div>
  </div>
  `;
}
