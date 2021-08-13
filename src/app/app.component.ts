import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'markmovies';
  @Output() visible:boolean = true;
  yearsVisible:boolean =false;
  @Output() selectedYear:any;
  tbYearsVisible:any;
  top10visible:boolean=false;
  @Output() btText="by Year";
  src="../../../assets/Group 20082.svg"

  showTop10(){
   this.visible= false;
   this.tbYearsVisible= false;  
   this.top10visible =true;
   this.btText="by Year";
 }
 showAllData(){
   this.visible = true;
   this.tbYearsVisible= false;  
   this.top10visible =false;
   this.btText="by Year";
 }
 showYears(){
  this.yearsVisible = this.yearsVisible?false:true;
 }
 anoEscolhido(anoEs:any){
   this.selectedYear = anoEs;
 }
 TableVisible(tbvs:any){
   this.tbYearsVisible = tbvs;
   this.btText=this.selectedYear;
   this.visible = false;
   this.top10visible =false;
 }
}
