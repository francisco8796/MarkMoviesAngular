import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieDataService } from 'src/app/services/movie-data.service';
import { Movie } from 'src/app/Models/movie';



describe('DataTable', () => {
  let service: MovieDataService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [HttpClientTestingModule],
      // Provide the service-under-test
      providers: [MovieDataService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(MovieDataService);
  })

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe('GetFirst 15 movies', () => {
    const dummyMovie: Movie[] = [
      { id: "6019683cf29db7802550f198", title: "Guardians of the Galaxy", year: 2014, rank: 1, revenue: 333.13 },
      { id: "6019683cf29db7802550f18c", title: "Prometheus", year: 2012, rank: 2, revenue: 126.46 },
      { id: "6019683cf29db7802550f192", title: "Split", year: 2016, rank: 3, revenue: 138.12 },
      { id: "6019683cf29db7802550f197", title: "Sing", year: 2016, rank: 4, revenue: 270.32 },
      { id: "6019683cf29db7802550f18d", title: "Suicide Squad", year: 2016, rank: 5, revenue: 325.02 },
      { id: "6019683cf29db7802550f18e", title: "The Great Wall", year: 2016, rank: 6, revenue: 45.13 },
      { id: "6019683cf29db7802550f18f", title: "La La Land", year: 2016, rank: 7, revenue: 151.06 },
      { id: "6019683cf29db7802550f190", title: "Mindhorn", year: 2016, rank: 8, revenue: 0 },
      { id: "6019683cf29db7802550f191", title: "The Lost City of Z", year: 2016, rank: 9, revenue: 8.01 },
      { id: "6019683cf29db7802550f193", title: "Passengers", year: 2016, rank: 10, revenue: 100.01 },
      { id: "6019683cf29db7802550f194", title: "Fantastic Beasts and Where to Find Them", year: 2016, rank: 11, revenue: 234.02 },
      { id: "6019683cf29db7802550f196", title: "Hidden Figures", year: 2016, rank: 12, revenue: 169.27 },
      { id: "6019683cf29db7802550f195", title: "Rogue One", year: 2016, rank: 13, revenue: 532.17 },
      { id: "6019683cf29db7802550f199", title: "Moana", year: 2016, rank: 14, revenue: 248.75 },
      { id: "6019683cf29db7802550f19a", title: "Colossal", year: 2016, rank: 15, revenue: 2.87 }
    ];
    it("should return the 15 movies", () => {
      service.getMoviesWithPages(0, 15).subscribe(
        movies => {
          expect(movies.length).toEqual(dummyMovie.length);
          expect(movies).toBe(dummyMovie);
          console.log(movies);
        });

      const req = httpTestingController.expectOne('http://movie-challenge-api-xpand.azurewebsites.net/api/movies?page=' + 0 + '&size=' + 15);
      expect(req.cancelled).toBeFalsy;
      expect(req.request.method).toEqual('GET');
      req.flush(dummyMovie);
    })
  })
  describe('getYearsData', () => {
    const dummyMovie: Movie[] = [
      { id: "6019683cf29db7802550f198", title: "Rogue One", year: 2016, rank: 13, revenue: 532.17 },
      { id: "6019683cf29db7802550f18c", title: "Finding Dory", year: 2016, rank: 120, revenue: 486.29 },
      { id: "6019683cf29db7802550f192", title: "Captain America: Civil War", year: 2016, rank: 36, revenue: 408.08 },
      { id: "6019683cf29db7802550f197", title: "The Secret Life of Pets", year: 2016, rank: 16, revenue: 368.31 },
      { id: "6019683cf29db7802550f18d", title: "The Jungle Book", year: 2016, rank: 126, revenue: 364 },
      { id: "6019683cf29db7802550f18e", title: "Deadpool", year: 2016, rank: 34, revenue: 363.02 },
      { id: "6019683cf29db7802550f18f", title: "Zootopia", year: 2016, rank: 75, revenue: 341.26 },
      { id: "6019683cf29db7802550f190", title: "Batman v Superman: Dawn of Justice", year: 2016, rank: 61, revenue: 330.25 },
      { id: "6019683cf29db7802550f191", title: "Suicide Squad", year: 2016, rank: 5, revenue: 325.02 },
      { id: "6019683cf29db7802550f193", title: "Sing", year: 2016, rank: 4, revenue: 270.32 }
    ];
    it("should return the top 10 movies of 2016", () => {
      service.getMovies().subscribe(
        movies => {
          expect(movies.length).toEqual(dummyMovie.length);
          expect(movies).toBe(dummyMovie);
          console.log(movies);
        });

      const req = httpTestingController.expectOne(service.ApiUrl);
      expect(req.cancelled).toBeFalsy;
      expect(req.request.method).toEqual('GET');
      req.flush(dummyMovie);
    })
  })
  describe('getTop10Revenue', () => {
    const dummyMovie: Movie[] = [
      { id: "6019683cf29db7802550f198", title: "Star Wars: Episode VII - The Force Awakens", year: 2015, rank: 51, revenue: 936.6 },
      { id: "6019683cf29db7802550f18c", title: "Avatar", year: 2009, rank: 88, revenue: 760.51 },
      { id: "6019683cf29db7802550f192", title: "Jurassic World", year: 2015, rank: 86, revenue: 652.18 },
      { id: "6019683cf29db7802550f197", title: "The Avengers", year: 2012, rank: 77, revenue: 623.28 },
      { id: "6019683cf29db7802550f18d", title: "The Dark Knight", year: 2008, rank: 55, revenue: 533.32 },
      { id: "6019683cf29db7802550f18e", title: "Rogue One", year: 2016, rank: 13, revenue: 532.17 },
      { id: "6019683cf29db7802550f18f", title: "Finding Dory", year: 2016, rank: 120, revenue: 486.29 },
      { id: "6019683cf29db7802550f190", title: "Avengers: Age of Ultron", year: 2015, rank: 95, revenue: 458.99 },
      { id: "6019683cf29db7802550f191", title: "The Dark Knight Rises", year: 2012, rank: 125, revenue: 448.13 },
      { id: "6019683cf29db7802550f193", title: "The Hunger Games: Catching Fire", year: 2013, rank: 579, revenue: 424.65 }
    ];

    it("should return top 10 movies", () => {
      service.getMovies().subscribe(
        movies => {
          expect(movies.length).toEqual(dummyMovie.length);
          expect(movies).toBe(dummyMovie);
          console.log(movies);
        });

      const req = httpTestingController.expectOne(service.ApiUrl);
      expect(req.cancelled).toBeFalsy;
      expect(req.request.method).toEqual('GET');
      req.flush(dummyMovie);
    })
  })
})
