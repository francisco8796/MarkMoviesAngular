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

  describe('getMovies', () => {

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
})
