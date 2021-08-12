import { Component, Input, OnInit, Output } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-years-data-table',
  templateUrl: './years-data-table.component.html',
  styleUrls: ['./years-data-table.component.css']
})
export class YearsDataTableComponent implements OnInit {

  constructor(public moviedata: MovieDataService) { }
  movieList: any;
  filmes: any;
  src = './eye.svg';
  @Input() year: any;


  ngOnInit(): void {

    this.moviedata.getYears(this.year).subscribe(data => {
      this.movieList = data;
      this.filmes = this.movieList.content
        .filter((y:any) => y.year == this.year)
        .sort((a: any, b: any) => (a.revenue < b.revenue ? 1 : -1))
        .slice(0, 10);
      console.log(this.year);
    });
  }


}
