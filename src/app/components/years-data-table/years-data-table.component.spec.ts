import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie } from 'src/app/Models/movie';
import { MovieDataService } from 'src/app/services/movie-data.service';

import { YearsDataTableComponent } from './years-data-table.component';

describe('YearsDataTableComponent', () => {
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

})

// describe('YearsDataTableComponent', () => {
//   let component: YearsDataTableComponent;
//   let fixture: ComponentFixture<YearsDataTableComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ YearsDataTableComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(YearsDataTableComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
