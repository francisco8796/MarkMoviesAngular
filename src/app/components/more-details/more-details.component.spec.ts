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
      { id: "6019683cf29db7802550f198", title: "Guardians of the Galaxy", year: 2014, rank: 1, revenue: 333.13 },
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







// describe('MoreDetailsComponent', () => {
//   let component: MoreDetailsComponent;
//   let fixture: ComponentFixture<MoreDetailsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ MoreDetailsComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MoreDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
