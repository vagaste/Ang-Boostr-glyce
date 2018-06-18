import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms';
import { Aliment } from '../aliment';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
quantityAliment: number;
alimentSelected: Aliment;
resultCg;

  ngOnInit() {
  }

  //quantite de glucide(qg), pour la quantite de l aliment saisie (quantite de l aliment*quantite de glucide pour 100g)/100
//formule (ig*qg)/100 
public calculCg (alimentSelected, quantityAliment) {
    if (alimentSelected.ig === '') {
      return 0;
    }
    return this.resultCg = ((alimentSelected.ig * ((this.quantityAliment * alimentSelected.carb) / 100)) / 100);
  }
}
