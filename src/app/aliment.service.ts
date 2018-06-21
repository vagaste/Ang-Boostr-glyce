import { Injectable } from '@angular/core';
import { Aliment } from './aliment';
import ALIMENT_DATA from './aliment-data';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {
  searchedAliments;

  constructor() {
    this.searchedAliments = ALIMENT_DATA.aliments;
  }
}
