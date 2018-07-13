import { Injectable } from '@angular/core';
import { Recette } from './recette';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor() { }

  // constructor(private http: HttpClient) { }

  // ici on met l'url du back (cf postman)
  // API_URL = 'https://bnppf1-bookmarks.herokuapp.com/author/';

//  createRecette(recette: Recette): Observable<Recette> {
//    return this.http.post<Recette>(this.API_URL, recette);
//    }

}
