import { Component, Input, OnInit } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {
  @Input() id !: string; 
  @Input() visible:any;
  movieList :any;
  specificMovie: any;
  separator= "../../../assets/Line 303.svg";
  close="../../../assets/close-24px.svg";

  constructor(public moviedata : MovieDataService) { }

  
  ngOnInit(): void {
    this.moviedata.getSpecificMovie(this.id).subscribe(data =>{
      this.movieList = data;
      this.specificMovie = this.movieList;
      console.log(this.specificMovie);     
    });
  
  }
  closeBt(){
    this.visible=false;
  }

}
