import { Component, Input, OnInit } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {
  //Id do filme
  @Input() id !: string;
  //Visible para mostrar/esconder a popUp 
  @Input() visible !: boolean;
  //Filme especifico 
  movie: any;
  //imagens
  separator = "../../../assets/Line 303.svg";
  close = "../../../assets/close-24px.svg";

  constructor(public moviedata: MovieDataService) { }


  ngOnInit(): void {
    //receber o serviço com para ter o filme especifico 
    this.moviedata.getSpecificMovie(this.id).subscribe(data => {
      this.movie = data;
    });

  }
  //esconder a popUp dos detalhes
  hidePopUp() {
    this.visible = false;
  }

}
