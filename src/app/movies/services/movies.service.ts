// get movie from a given theater
// todo use real data!
export class MoviesService {
  static selector = 'moviesService';
  cinema: { cinemaId: string, cinemaName: string } = {
    cinemaId: '0008',
    cinemaName: 'Mueller'
  };
  movies: { id: number, filmName: string, filmSlug: string }[] = [
    { id: 1, filmName: 'THE SUICIDE SQUAD', filmSlug: 'the-suicide-squad' }
  ];

  constructor(
    private $q: angular.IQService
  ) {
    'ngInject';
  }

  getCinema() {
    return this.$q.resolve(this.cinema);
  }

  getAllMovies() {
    return this.$q.resolve(this.movies);
  }
}
