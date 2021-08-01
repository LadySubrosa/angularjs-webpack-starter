/**
 * Import the Component styles
 */
import './movies-list.component.scss';

class MoviesListController {
  movies: { filmName: string, filmSlug: string }[];
}

export class MoviesList implements angular.IComponentOptions {
  static selector = 'moviesList';
  static bindings = {
    movies: '<',
  };
  static controller = MoviesListController;
  static template = `
  <div class="movies-list" ng-repeat="movie in $ctrl.movies">
    <a class="ticket-button" href="https://drafthouse.com/show/{{movie.filmSlug}}">{{ movie.filmName }}</a>
  </div>
  `;
}
