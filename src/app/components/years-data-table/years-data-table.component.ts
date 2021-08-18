import { Component, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-years-data-table',
  templateUrl: './years-data-table.component.html',
  styleUrls: ['./years-data-table.component.css']
})
export class YearsDataTableComponent implements OnInit {

  constructor(public moviedata: MovieDataService) { }
  //lista com os filmes todos
  movieList: any;
  //Lista dos filmes com o ano escolhido 
  movies: any;
  //Ano atualizado sempre que é escolhido outro ano
  anoIsUpdated: any;
  //Imagem
  src = '../../../assets/eye.svg';

  //Receber o ano escolhido
  @Input() year: any;

  ngOnInit(): void { }
  //Atualizar a tabela sempre que é escolhido um ano
  ngOnChanges(changes: SimpleChanges) {
    //Atualizar com o novo ano escolhido
    this.anoIsUpdated = changes.year.currentValue;
    //Service call para ir buscar o ano 
    this.moviedata.getYears(this.anoIsUpdated).subscribe(data => {
      //Lista com os filmes todos
      this.movieList = data;
      //Lista com os filmes do ano escolhido filtrados
      this.movies = this.movieList.content
        .filter((y: any) => y.year == this.anoIsUpdated)
        .sort((a: any, b: any) => (a.revenue < b.revenue ? 1 : -1))
        .slice(0, 10);
    });
    console.log(changes);
  }


}
