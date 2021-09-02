import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../Models/movie';



@Injectable({
  providedIn: 'root'
})

export class MovieDataService {

  ApiUrl='http://movie-challenge-api-xpand.azurewebsites.net/api/movies';

  constructor(private http: HttpClient) { }

 

  //Get com todos os dados da tabela
  getMovies():Observable<Movie[]> {
    return this.http.get<Movie[]>(this.ApiUrl);
  }
  //get com os dados especificos de 1 filme
  getSpecificMovie(id: string):Observable<Movie[]> {
    return this.http.get<Movie[]>('http://movie-challenge-api-xpand.azurewebsites.net/api/movies/' + id);
  }
  //get com o ano escolhido
  getYears(year: any):Observable<Movie> {
    let params = new HttpParams().set('year', year);
    return this.http.get<Movie>('http://movie-challenge-api-xpand.azurewebsites.net/api/movies', { params: params });
  }
  getMoviesWithPages(page:any, size:any):Observable<Movie[]> {
    return this.http.get<Movie[]>('http://movie-challenge-api-xpand.azurewebsites.net/api/movies?page='+page+'&size='+size)
  }

}
