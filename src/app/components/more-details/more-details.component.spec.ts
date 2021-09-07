import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie } from 'src/app/Models/movie';
import { MovieDataService } from 'src/app/services/movie-data.service';

import { MoreDetailsComponent } from './more-details.component';

describe('MoreDetailsComponent', () => {

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

  describe('getDetails', () => {
    const dummyMovie: Movie[] = [
      {
        id: "6019683cf29db7802550f198",
        title: "Guardians of the Galaxy",
        year: 2014,
        rank: 1,
        actors: "Chris Pratt, Vin Diesel, Bradley Cooper, Zoe Saldana",
        description: "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.",
        director: "James Gunn",
        genre: "Action,Adventure,Sci-Fi",
        metascore: 76,
        rating: 8.1,
        revenue: 333.13,
        runtime: 121,
        votes: 757074,
      },
    ]

    it("should return the 1 movie", () => {
      service.getSpecificMovie("6019683cf29db7802550f198").subscribe(
        movies => {
          expect(movies.length).toEqual(dummyMovie.length);
          expect(movies).toBe(dummyMovie);
          console.log(movies);
        });

      const req = httpTestingController.expectOne('http://movie-challenge-api-xpand.azurewebsites.net/api/movies/' + "6019683cf29db7802550f198");
      expect(req.cancelled).toBeFalsy;
      expect(req.request.method).toEqual('GET');
      req.flush(dummyMovie);
    })
  })

})