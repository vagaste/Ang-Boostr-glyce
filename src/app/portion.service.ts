import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portion } from './portion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortionService {

  constructor() { }

  // constructor(private http: HttpClient) { }

  // ici on met l'url du back (cf postman)
  // API_URL = 'https://bnppf1-bookmarks.herokuapp.com/author/';

  // createPortion(portion: Portion): Observable<Portion> {
  //   return this.http.post<Portion>(this.API_URL, portion);
  // }

}
