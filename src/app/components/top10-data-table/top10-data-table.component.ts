import { Component, OnInit } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-top10-data-table',
  templateUrl: './top10-data-table.component.html',
  styleUrls: ['./top10-data-table.component.css']
})
export class Top10DataTableComponent implements OnInit {

  constructor(public moviedata : MovieDataService) { }
  movieList :any;
  filmes: any;
  src='../../../assets/eye.svg';

  ngOnInit(): void {

    this.moviedata.getMovies().subscribe(data =>{
      this.movieList = data;
      this.filmes = this.movieList.content.sort((a : any, b: any) => (a.revenue < b.revenue ? 1 : -1)).slice(0,10);

      console.log(this.filmes);
    });
  }
}
