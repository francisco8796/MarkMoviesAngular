import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Movie } from 'src/app/Models/movie';
import { MovieDataService } from 'src/app/services/movie-data.service';

import { Top10DataTableComponent } from './top10-data-table.component';

describe('Top10 Api call tests', () => {

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
    httpTestingController = TestBed.get(HttpTestingController) ;
    service = TestBed.get(MovieDataService);
  })

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe('getMovies', () => {

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


//  describe('Top10 Api call tests', () => {
//   let movieData: MovieDataService;
 
//   beforeEach(inject(
//     [MovieDataService],
//     (movieService: MovieDataService) => {
//       movieData = movieService;
//     }
//   ));

//   // let result:any;
//   // it('should return 10', () =>{
//   //   movieData.getMovies().subscribe(t=>{
//   //     result = t;
//   //   })
//   //   console.log(result);
//   // })

//   let movies:any;
  
//   it('should see 10 data',()=>{
    
//    movieData.getMovies().subscribe(data =>{
//      movies = data;
//      expect(movies.length).toBe(10);
//    });
   
//   })

// });



// // describe('Top10DataTableComponent', () => {
// //   let component: Top10DataTableComponent;
// //   let fixture: ComponentFixture<Top10DataTableComponent>;

// //   beforeEach(async () => {
// //     await TestBed.configureTestingModule({
// //       declarations: [ Top10DataTableComponent ]
// //     })
// //     .compileComponents();
// //   });

// //   beforeEach(() => {
// //     fixture = TestBed.createComponent(Top10DataTableComponent);
// //     component = fixture.componentInstance;
// //     fixture.detectChanges();
// //   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });
// // });
