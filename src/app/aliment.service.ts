import { Injectable } from '@angular/core';
import { ALIMENT_DATA } from './real-aliment';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {

  constructor() {
    this.selectedAliment = ALIMENT_DATA;
  }

  selectedAliment: Aliment;

}
