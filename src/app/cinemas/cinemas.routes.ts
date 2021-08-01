import { CinemasContainer } from './containers/cinemas/cinemas.container';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('cinemas', {
      parent: 'app',
      url: '/cinemas',
      component: CinemasContainer.selector
    });
};
