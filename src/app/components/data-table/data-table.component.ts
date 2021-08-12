import { Component, OnInit, Output } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor(public moviedata : MovieDataService) { }
  movieList :any;
  filmes: any;
  src='../../../imgs/eye.svg';
  detailsVisible:boolean = false;
  @Output() value:string="";

  ngOnInit(): void {

    this.moviedata.getMovies().subscribe(data =>{
      this.movieList = data;
      this.filmes = this.movieList.content;
      console.log(this.filmes);
    });
    
  }
  showDetails(id:string){
    this.detailsVisible = this.detailsVisible?false:true;
    this.value = id;
    console.log(this.value);
  }
 

  
}
