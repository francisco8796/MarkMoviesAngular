import { Component, OnInit, Output, Input, SimpleChanges } from '@angular/core';
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
  //Ano atualizado sempre que é escolhido outro ano
  anoIsUpdated: any;
  //imagem
  src = '../../../assets/eye.svg';
  @Output() value: string = "";
  @Input() selectedTable: any;
  @Input() year:any;

  ngOnInit(): void {
    //carregar os filmes 
    this.loadInitPost();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedTable) {
      if (this.selectedTable === "Top10") {
        this.moviedata.getMovies().subscribe((data:any)=>{
          this.movieList = data;
          this.movies = this.movieList.content.sort((a: any, b: any) => (a.revenue < b.revenue ? 1 : -1)).slice(0, 10);
        })
        console.log("works");
      }
      if(this.selectedTable==="AllMovies"){
        this.loadInitPost();
      }
      if(this.selectedTable==="Top10Year"){
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
      }
    }
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
