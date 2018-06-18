import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { AlimentService } from '../aliment.service';
import { Router } from '@angular/router';
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

  // (val) ici on injecte le service AlimentService : nom + type. L'injection permet de
  // déclarer ici l'objet "aliments"
  constructor(public alimentService: AlimentService) { }

  aliments;
  ngOnInit() {
    // (val) le composant est prêt à être utilisé : mettre son code ici
    // l'objet aliment est alimenté avec l'objet aliment déclaré dans le service alimentService
    this.aliments = this.alimentService.selectedAliment;
  }

  //quantite de glucide(qg), pour la quantite de l aliment saisie (quantite de l aliment*quantite de glucide pour 100g)/100
//formule (ig*qg)/100 
public calculCg (alimentSelected, quantityAliment) {
    if (alimentSelected.ig === '') {
      return 0;
    }
    return this.resultCg = ((alimentSelected.ig * ((this.quantityAliment * alimentSelected.carb) / 100)) / 100);
  }
/* (val) méthode pour afficher le détail : il faut aussi ajouter
private router: Router
dans le constructeur mais ça plante à l'exécution

  showAlimentDetail(aliment, e) {
    e.preventDefault();
     this.alimentService.selectedAliment = aliment ;
     this.router.navigateByUrl('/detail');

  }
  */
}
