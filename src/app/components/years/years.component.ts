import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {

  constructor(public moviedata: MovieDataService) { }
  //input para mostrar a popUp com os anos
  @Input() visible: any;
  //Mostrar a tabela com o ano escolhido 
  tbvisible: any;
  //Lista com os anos
  anos = ["2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"];
  //Output do ano escolhido 
  @Output() ano = new EventEmitter<any>();
  //Output para mostrar a tabela com os anos
  @Output() tableVisible = new EventEmitter<any>();


  selecedYear(year: any) {
    //Enviar o ano escolhido 
    this.ano.emit(year);
    //Esconder a popUp
    this.visible = false;
    //Mostrar a tabela do ano escolhido
    this.tbvisible = true;
    //Enviar a visibilidade da tabela
    this.tableVisible.emit(this.tbvisible);
  }

  ngOnInit(): void { }
}
