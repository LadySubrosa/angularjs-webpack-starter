const apiUrl = 'https://drafthouse.com/s/mother/v1/page/market/main/austin';
export class CinemasService {
  static selector = 'cinemasService';
  selectedCinema: { id: string, name: string } = { id: '', name: '' };
  movies: { id: string, name: string, slug: string }[] = [{ id: '1', name: 'The Suicide Squad', slug: 'the-suicide-squad' }];
  cinemas: { id: string, name: string }[] = [{
    id: '0008',
    name: 'Mueller'
  },
  {
    id: '0006',
    name: 'Slaughter Lane'
  }
  ];

  constructor(
    private $q: angular.IQService,
    private $http: angular.IHttpService
  ) {
    'ngInject';
  }

  updateSelectedCinema(id: string) {
    this.selectedCinema = this.cinemas.find(cinema => cinema.id === id);
  }

  getSelectedCinema() {
    if (this.selectedCinema.id === '') {
      this.getAllCinemas();
      this.updateSelectedCinema(this.cinemas[0].id);
    }

    return this.selectedCinema;
  }

  async getMoviesFromAlamo() {
    try {
      const { sessions, films } = await this.$http.get(apiUrl, { responseType: 'json' }).then((response: any) => {
        return response.data.data;
      });
      const currentSessions = sessions.filter((session: any) => session.cinemaId === this.selectedCinema.id);
      const filmsAtTheater = films.filter((film: any) => currentSessions.find((currentSession: any) => film.title === currentSession.filmName));
      return filmsAtTheater;
    } catch (exception) {
      console.error(exception);
    }
  }

  async getCinemasFromAlamo() {
    try {
      const { market: { cinemas } } = await this.$http.get(apiUrl, { responseType: 'json' }).then((response: any) => {
        return response.data.data;
      });
      return cinemas;
    } catch (exception) {
      console.error(exception);
    }
  }

  async getAllCinemas() {
    const cinemas = await this.getCinemasFromAlamo();
    this.cinemas = cinemas;
    return this.$q.resolve(cinemas);
  }
}
