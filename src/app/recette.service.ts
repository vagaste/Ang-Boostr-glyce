import { Injectable } from '@angular/core';
import { Recette } from './recette';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  // ici on met l'url du back (cf postman)
  API_URL = 'http://localhost:8090';
  constructor(private http: HttpClient) { }


  getAll(): Observable<Recette[]> {
    return this.http.get<Recette[]> (this.API_URL + '/mes-recettes');
  }

  createRecette(recette: Recette): Observable<Recette> {
    return this.http.post<Recette>(this.API_URL + '/mes-recettes/save', recette);
    }

}
