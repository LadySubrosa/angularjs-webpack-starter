const apiUrl = 'https://drafthouse.com/s/mother/v1/page/market/main/austin';
export class CinemasService {
  static selector = 'cinemasService';
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

  async getCinemasFromAlamo() {
    try {
      // const { data: { market: { cinemas } } } = await (await fetch(apiUrl)).json();
      // return cinemas;
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
    return this.$q.resolve(cinemas);
  }
}
