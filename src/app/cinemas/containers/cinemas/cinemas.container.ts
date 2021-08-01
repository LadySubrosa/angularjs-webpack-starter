import { CinemasService } from '../../services/cinemas.service';

/**
 * Import the Component styles
 */
import './cinemas.container.scss';

class CinemasController {
  cinemas: { cinemaId: string, cinemaName: string }[];

  constructor(
    private cinemasService: CinemasService
  ) {
    'ngInject';
  }

  $onInit() {
    this.fetchData();
  }

  private fetchData() {
    this.cinemasService.getAllCinemas()
      .then(cinemasData => {
        this.cinemas = cinemasData;
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
