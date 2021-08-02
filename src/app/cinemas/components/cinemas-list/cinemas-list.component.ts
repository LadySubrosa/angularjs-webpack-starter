/**
 * Import the Component styles
 */
import './cinemas-list.component.scss';

class CinemasListController {
  cinemas: { id: string, name: string }[];
  selectedCinema: string;
  updateCinema: ($event: { $event: { id: string } }) => void;

  setUpdateCinema(id: string) {
    this.updateCinema({
      $event: {
        id: id
      }
    });
  }
}

export class CinemasList implements angular.IComponentOptions {
  static selector = 'cinemasList';
  static bindings = {
    cinemas: '=',
    selectedCinema: '=',
    updateCinema: '&'
  };
  static controller = CinemasListController;
  static template = `
  <div class="cinema" ng-repeat="cinema in $ctrl.cinemas">
   <button ng-class="{selected : $ctrl.selectedCinema === cinema.id}" ng-click="$ctrl.setUpdateCinema(cinema.id)">{{ cinema.name }}</button>
   </div>
  `;
}
