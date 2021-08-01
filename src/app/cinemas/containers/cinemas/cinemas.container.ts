import { CinemasService } from '../../services/cinemas.service';

/**
 * Import the Component styles
 */
import './cinemas.container.scss';

class CinemasController {
  cinemas: { id: string, name: string }[];
  selectedCinema: { id: string, name: string };

  constructor(
    private $scope: ng.IScope,
    private cinemasService: CinemasService
  ) {
    'ngInject';
  }

  async $onInit() {
    await this.fetchData();
    console.log(this.cinemas);
    this.setSelectedCinema(this.cinemas[0].id);
    console.log('selected cinema on init', this.selectedCinema);
  }


  setSelectedCinema(id: string) {
    this.$scope.$evalAsync(() => {
      this.cinemasService.updateSelectedCinema(id);
    });
    this.$scope.$evalAsync(() => {
      this.selectedCinema = this.getSelectedCinema();
    });
  }

  getSelectedCinema() {
    return this.cinemasService.getSelectedCinema();
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
      {{ $ctrl.selectedCinema.name }}
      <cinemas-list cinemas="$ctrl.cinemas" selected-cinema="$ctrl.selectedCinema.id" update-cinema="$ctrl.setSelectedCinema($event.id)"></cinemas-list>
    </div>
  </div>
  `;
}
