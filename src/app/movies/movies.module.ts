// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */
import { MoviesList } from './components/movies-list/movies-list.component';

/**
 * Import Module Containers
 */
import { MoviesContainer } from './containers/movies/movies.container';
/**
 * Import Module Services
 */
import { MoviesService } from './services/movies.service';

/**
 * Import Module Routing
 */
import { routing } from './movies.routes';

export const moduleName =
  angular.module('application.movies', [
      'ui.router'
  ])

  /**
   * Register Module Components
   */
  .component(MoviesList.selector, MoviesList)

  /**
   * Register Module Containers
   */
  .component(MoviesContainer.selector, MoviesContainer)

  /**
   * Register Module Services
   */
  .service(MoviesService.selector, MoviesService)

  /**
   * Register Module Configuration
   */
  .config(routing)
  .name;
