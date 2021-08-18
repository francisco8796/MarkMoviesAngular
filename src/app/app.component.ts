import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'markmovies';
  //Mostrar/esconder a tabela com todos os movies 
  allMoviesVisible: boolean = true;
  //Mostrar/esconder a popUp com os anos
  yearsPopUpVisible: boolean = false;
  //Mostrar/esconder a tabela dos anos
  tbYearsVisible !: boolean;
  //Mostrar /esconder a tabela Top 10 revenue
  top10visible: boolean = false;
  //imagem
  src = "../../../assets/Group 20082.svg";
  //Texto do botao dos years
  btText = "by Year";
  //Output do Ano Escolhido
  @Output() selectedYear: any;

  showTop10() {
    //Esconder a tabela com toda os movies
    this.allMoviesVisible = false;
    //Esconder a tabela dos anos
    this.tbYearsVisible = false;
    //Mostrar a top10 table
    this.top10visible = true;
    //Meter o texto do botao dos anos a "by Year"
    this.btText = "by Year";
  }

  showAllMovies() {
    //Mostrar a tabela com todos os filmes
    this.allMoviesVisible = true;
    //Esconder a tabela dos anos
    this.tbYearsVisible = false;
    //Esconder a top10 table
    this.top10visible = false;
    //Meter o texto do botao dos anos a "by Year"
    this.btText = "by Year";
  }

  showYears() {
    //Mostrar a popUp dos years
    this.yearsPopUpVisible = this.yearsPopUpVisible ? false : true;
  }
  //Passar o ano escolhido 
  selectYear(chooseYear: any) {
    this.selectedYear = chooseYear;
  }

  isTableVisible(isVisible: boolean) {
    //Atualizar a visibilidade da tabela do ano escolhido
    this.tbYearsVisible = isVisible;
    //Mudar o texto do botao para o ano escolhido
    this.btText = this.selectedYear;
    //Esconder a tabela dos filmes todos
    this.allMoviesVisible = false;
    //Esconder a tabela do Top10
    this.top10visible = false;
  }
}
