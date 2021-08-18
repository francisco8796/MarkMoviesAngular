import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http: HttpClient) { }

  //Get com todos os dados da tabela
  getMovies() {
    return this.http.get('http://movie-challenge-api-xpand.azurewebsites.net/api/movies');
  }
  //get com os dados especificos de 1 filme
  getSpecificMovie(id: string) {
    return this.http.get('http://movie-challenge-api-xpand.azurewebsites.net/api/movies/' + id);
  }
  //get com o ano escolhido
  getYears(year: any) {
    let params = new HttpParams().set('year', year);
    return this.http.get('http://movie-challenge-api-xpand.azurewebsites.net/api/movies', { params: params });
  }
  getMoviesWithPages(page:any, size:any) {
    return this.http.get('http://movie-challenge-api-xpand.azurewebsites.net/api/movies?page='+page+'&size='+size);
  }

}
