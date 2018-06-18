import { Injectable } from '@angular/core';
import { ALIMENT_DATA } from './aliment-data';
import { Aliment } from './aliment';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {

  constructor() {
    this.selectedAliment = ALIMENT_DATA.Aliments;
  }

  selectedAliment: Aliment;

}
