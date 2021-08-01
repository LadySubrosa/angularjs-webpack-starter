// get list of cinemas for a market
// todo use real data!
export class CinemasService {
  static selector = 'cinemasService';
  cinemas: { cinemaId: string, cinemaName: string }[] = [{
    cinemaId: '0008',
    cinemaName: 'Mueller'
  },
  {
    cinemaId: '0006',
    cinemaName: 'Slaughter Lane'
  }
  ];

  constructor(
    private $q: angular.IQService
  ) {
    'ngInject';
  }

  getAllCinemas() {
    return this.$q.resolve(this.cinemas);
  }
}
