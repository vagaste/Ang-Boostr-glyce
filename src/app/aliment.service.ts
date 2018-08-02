import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aliment } from './aliment';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {

  API_URL_ALIMENT = environment.urlBack + '/aliment';

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Aliment[]> {
    return this.http.get<Aliment[]> (this.API_URL_ALIMENT);
  }
}
