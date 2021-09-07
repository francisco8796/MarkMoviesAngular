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
  @Output() selectedYear:any;
  //Tabela Escolhida
  @Output() selectedTable:any;

  showTop10() {
    this.btText = "by Year";
    this.selectedTable= "Top10"
  }

  showAllMovies() {
    //Meter o texto do botao dos anos a "by Year"
    this.btText = "by Year";
    this.selectedTable= "AllMovies"
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
    //Mudar o texto do botao para o ano escolhido
    this.btText = this.selectedYear;
    this.selectedTable="Top10Year";
  }
}
