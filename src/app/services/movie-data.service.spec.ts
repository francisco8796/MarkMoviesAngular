// import { HttpClient } from '@angular/common/http';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { Movie } from 'src/app/Models/movie';
// import { MovieDataService } from 'src/app/services/movie-data.service';


// describe('MovieDataService', () => {

//   let service: MovieDataService;
//   let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       // Import the HttpClient mocking services
//       imports: [HttpClientTestingModule],
//       // Provide the service-under-test
//       providers: [MovieDataService]
//     });
//     httpClient = TestBed.inject(HttpClient);
//     httpTestingController = TestBed.get(HttpTestingController);
//     service = TestBed.get(MovieDataService);
//   })

//   afterEach(() => {
//     // After every test, assert that there are no more pending requests.
//     httpTestingController.verify();
//   });

//   describe('getDetails', () => {

//     it("should return the 1 movie", () => {
//       service.getMovies().subscribe(
//         movies => {
//           expect(movies.length).toEqual(1000);
//           console.log(movies);
//         });
//       const req = httpTestingController.expectOne(service.ApiUrl);
//       expect(req.cancelled).toBeFalsy;
//       expect(req.request.method).toEqual('GET');
//       req.flush(req);
//     })
//   })
// })
