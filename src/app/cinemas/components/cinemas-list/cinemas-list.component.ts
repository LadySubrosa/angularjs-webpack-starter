/**
 * Import the Component styles
 */
import './cinemas-list.component.scss';

class CinemasListController {
  cinemas: { id: string, name: string }[];
}

export class CinemasList implements angular.IComponentOptions {
  static selector = 'cinemasList';
  static bindings = {
    cinemas: '=',
  };
  static controller = CinemasListController;
  static template = `
  <div class="cinemas-list" ng-repeat="cinema in $ctrl.cinemas">
   <button>{{ cinema.name }}</button>
   </div>
  `;
}
