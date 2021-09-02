import { Component, OnInit, Output, SimpleChanges } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor(public moviedata: MovieDataService) { }
  //Lista com todos os dados
  movieList: any;
  //lista com os filmes
  movies: any;
  //Numero da pagina
  page: number = 0;
  //Tamanho da pagina
  size: number = 15;
  //Mostrar/esconder os detalhes especificos do filme
  detailsIsVisible: boolean = false;
  //imagem
  src = '../../../assets/eye.svg';
  @Output() value: string = "";

  ngOnInit(): void {
    //carregar os filmes 
    this.loadInitPost();
  }

  loadInitPost() {
    //Ir buscar o get ao serviço 
    this.moviedata.getMoviesWithPages(this.page, this.size).subscribe((data: any) => {
      //todos os dados da api
      this.movieList = data;
      //Apenas dados que é preciso 
      this.movies = this.movieList.content
    });
    
  }

  loadMoreMovies() {
    //aumentar o tamanho da pagina
    this.size += 10;
    //Ir buscar o get ao serviço 
    this.moviedata.getMoviesWithPages(this.page, this.size)
      .subscribe((data: any) => {
        //todos os dados da api
        this.movieList = data;
        //Apenas dados que é preciso 
        this.movies = this.movieList.content
      });
  }

  onScroll() {
    //carregar o proximo filme
    this.loadMoreMovies();
  }

  showDetails(id: string) {
    //Mostrar os detalhes especificos aka "more details"
    this.detailsIsVisible = this.detailsIsVisible ? false : true;
    //passar o id para valor que depois o valor é enviado para os "more details"
    this.value = id;
  }



}
