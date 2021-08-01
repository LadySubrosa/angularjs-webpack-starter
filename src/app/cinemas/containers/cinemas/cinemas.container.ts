import { CinemasService } from '../../services/cinemas.service';

/**
 * Import the Component styles
 */
import './cinemas.container.scss';

class CinemasController {
  cinemas: { id: string, name: string }[];

  constructor(
    private $scope: ng.IScope,
    private cinemasService: CinemasService
  ) {
    'ngInject';
  }

  async $onInit() {
    await this.fetchData();
    this.cinemas.forEach(cinema => {
      console.log(cinema);
    });
  }

  private async fetchData() {

    await this.cinemasService.getAllCinemas()
      .then(cinemasData => {
        this.$scope.$apply(() => {
          this.cinemas = cinemasData;
        });
      });
  }
}

export class CinemasContainer implements angular.IComponentOptions {
  static selector = 'cinemas';
  static controller = CinemasController;
  static template = `
  <div class="row">
    <div class="col-md-12">
      <h1>Cinemas in Austin</h1>
      <cinemas-list cinemas="$ctrl.cinemas"></cinemas-list>
    </div>
  </div>
  `;
}
