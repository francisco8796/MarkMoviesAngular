import { Component, OnInit, Output, SimpleChanges } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor(public moviedata: MovieDataService) { }
  movieList: any;
  movies: any;
  src = '../../../assets/eye.svg';
  detailsIsVisible: boolean = false;
  @Output() value: string = "";

  page=5;
  size=11;

  onScroll(event: any) {
    // visible height + pixel scrolled >= total height 
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.page+=1;
      console.log(this.page);
    }
}
  ngOnInit(): void {
    //Ir buscar o get ao serviço 
    this.moviedata.getMovies().subscribe(data => {
      //todos os dados da api
      this.movieList = data;
      //Apenas dados que é preciso 
      this.movies = this.movieList.content;
      console.log(this.movies);
    });    
  }


  showDetails(id: string) {
    //Mostrar os detalhes especificos aka "more details"
    this.detailsIsVisible = this.detailsIsVisible ? false : true;
    //passar o id para valor que depois o valor é enviado para os "more details"
    this.value = id;
    console.log(this.value);
  }



}
