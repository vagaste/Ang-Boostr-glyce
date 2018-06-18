import { Injectable } from '@angular/core';
import { Aliment } from './aliment';
import ALIMENT_DATA from './aliment-data';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {

  constructor() {
    this.selectedAliment = ALIMENT_DATA.aliments;
  }

  selectedAliment;

}
