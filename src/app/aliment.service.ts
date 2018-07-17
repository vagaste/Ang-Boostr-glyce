import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aliment } from './aliment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {
  // searchedAliments;

  constructor(private http: HttpClient) {
    // this.searchedAliments = ALIMENT_DATA;
  }

  getAll(): Observable<Aliment[]> {
    return this.http.get<Aliment[]> ('http://localhost:8090/aliment');
  }
}
