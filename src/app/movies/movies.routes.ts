import { MoviesContainer } from './containers/movies/movies.container';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('movies', {
      parent: 'app',
      url: '/movies',
      component: MoviesContainer.selector
    });
};
