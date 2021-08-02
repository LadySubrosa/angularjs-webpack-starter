import { CinemasService } from '../../services/cinemas.service';

/**
 * Import the Component styles
 */
import './cinemas.container.scss';

class CinemasController {
  cinemas: { id: string, name: string }[];
  selectedCinema: { id: string, name: string };
  movies: { id: string, name: string, slug: string }[];

  constructor(
    private $scope: ng.IScope,
    private cinemasService: CinemasService
  ) {
    'ngInject';
  }

  async $onInit() {
    await this.fetchData();
    this.setSelectedCinema(this.cinemas[0].id);
  }


  setSelectedCinema(id: string) {
    this.$scope.$evalAsync(() => {
      this.cinemasService.updateSelectedCinema(id);
    });
    this.$scope.$evalAsync(() => {
      this.selectedCinema = this.getSelectedCinema();
    });
    this.$scope.$evalAsync(() => {
      this.getMovies();
    });
  }

  getSelectedCinema() {
    return this.cinemasService.getSelectedCinema();
  }

  private async getMovies() {
    await this.cinemasService.getMoviesFromAlamo().then(movies => {
      this.$scope.$apply(() => {
        this.movies = movies;
      });
    });
  }

  private async fetchData() {
    await this.cinemasService.getAllCinemas()
      .then(cinemasData => {
        this.$scope.$apply(() => {
          this.cinemas = cinemasData;
        });
        this.getMovies();
      });
  }
}

export class CinemasContainer implements angular.IComponentOptions {
  static selector = 'cinemas';
  static controller = CinemasController;
  static template = `
  <div class="row">
    <div class="col-md-12">
      <h1>find a movie</h1>
      <h2>select theater</h2>
      <cinemas-list cinemas="$ctrl.cinemas" selected-cinema="$ctrl.selectedCinema.id" update-cinema="$ctrl.setSelectedCinema($event.id)"></cinemas-list>
      <h2>Films playing at <span class="selected-cinema">{{$ctrl.selectedCinema.name}}</span></h>
      <div class="movies-list" ng-repeat="movie in $ctrl.movies">
        <a class="ticket-button" href="https://drafthouse.com/show/{{movie.slug}}">{{ movie.title }}</a>
      </div>
      </div>
  </div>
  `;
}
