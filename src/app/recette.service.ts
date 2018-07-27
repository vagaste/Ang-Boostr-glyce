import { Injectable } from '@angular/core';
import { Recette } from './recette';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  // ici on met l'url du back (cf postman)
  API_URL_RECETTE = environment.urlBack + '/recettes';
  constructor(private http: HttpClient) { }


  getAll(): Observable<Recette[]> {
    return this.http.get<Recette[]> (this.API_URL_RECETTE);
  }

  createRecette(recette: Recette): Observable<Recette> {
    return this.http.post<Recette>(this.API_URL_RECETTE + '/save', recette);
    }

  removeRecetteById(id: number) {
    return this.http.delete(this.API_URL_RECETTE + '/delete/' + id);
  }
}
