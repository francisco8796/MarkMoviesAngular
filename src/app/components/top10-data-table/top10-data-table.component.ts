import { Component, OnInit } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-top10-data-table',
  templateUrl: './top10-data-table.component.html',
  styleUrls: ['./top10-data-table.component.css']
})
export class Top10DataTableComponent implements OnInit {

  constructor(public moviedata: MovieDataService) { }
  //Lista de todos os filmes
  movieList: any;
  //Lista com o top10 filmes
  top10Movies: any;
  //imagem
  src = '../../../assets/eye.svg';

  ngOnInit(): void {
    //Ir buscar o get ao serviço 
    this.moviedata.getMovies().subscribe(data => {
      //passar o get da Api para o movieList
      this.movieList = data;
      //Filtrar a data para obter o top10 revenue
      this.top10Movies = this.movieList.content.sort((a: any, b: any) => (a.revenue < b.revenue ? 1 : -1)).slice(0, 10);

    });
  }
}
