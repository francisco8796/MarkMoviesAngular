import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http : HttpClient) {}
  getMovies(){
    return this.http.get('http://movie-challenge-api-xpand.azurewebsites.net/api/movies');
  }
  getSpecificMovie(id:string){
    return this.http.get('http://movie-challenge-api-xpand.azurewebsites.net/api/movies/'+id);
  }
  getYears(year:any){
    let params = new HttpParams().set('year',year);
    return this.http.get('http://movie-challenge-api-xpand.azurewebsites.net/api/movies',{params:params});
  }
}
