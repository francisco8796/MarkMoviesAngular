import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {

  constructor(public moviedata : MovieDataService) { }
  yearsList :any;
  years: any;
  @Input() visible:any;
  tbvisible : any;
  anos =["2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"];

  @Output() ano = new EventEmitter<any>();
  @Output() tableVisible = new EventEmitter<any>();
  
  selecedYear(year:any){
    this.ano.emit(year);
    this.visible=false;
    this.tbvisible=true;
    this.tableVisible.emit(this.tbvisible);
  }

  ngOnInit(): void {
  //   this.moviedata.getMovies().subscribe(data =>{
  //     this.yearsList = data;
  //     this.years = this.yearsList;
  //     this.years = 
  //       new Set([
  //       this.yearsList,
  //       this.years.content
  //         .sort((a:any, b:any) => (a.year < b.year ? 1 : -1))
  //         .map((y:any) => y.year),
  //     ])
  //     console.log( this.years);

  //     this.years = this.yearsList.content;
  //     this.anos = this.years.filter((item:any,pos:any) => (this.years.indexOf(item)===pos));

  // });
  }
}
