import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { AlimentService } from '../aliment.service';
import { Router } from '@angular/router';
import { Aliment } from '../aliment';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
quantityAliment: number;
alimentSelected: Aliment;
resultCg;
displayedColumns = ['name', 'category', 'energy', 'ig', 'cg'];

  // (val) ici on injecte le service AlimentService : nom + type. L'injection permet de
  // déclarer ici l'objet "aliments"
  constructor(public alimentService: AlimentService) { }

  sortedAliments;
  ngOnInit() {
    // (val) le composant est prêt à être utilisé : mettre son code ici
    // l'objet aliment est alimenté avec l'objet aliment déclaré dans le service alimentService
    this.sortedAliments = this.alimentService.searchedAliments.slice();
  }

  sortData(sort: Sort) {
    const data = this.alimentService.searchedAliments.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedAliments = data;
      return;
    }

    this.sortedAliments = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'category': return compare(a.category, b.category, isAsc);
        case 'energy': return compare(a.energy, b.energy, isAsc);
        case 'ig': return compare(a.ig, b.ig, isAsc);
        case 'cg': return compare(a.cg, b.cg, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
  //quantite de glucide(qg), pour la quantite de l aliment saisie (quantite de l aliment*quantite de glucide pour 100g)/100
//formule (ig*qg)/100 
/* public calculCg (alimentSelected, quantityAliment) {
    if (alimentSelected.ig === '') {
      return 0;
    }
    return this.resultCg = ((alimentSelected.ig * ((this.quantityAliment * alimentSelected.carb) / 100)) / 100);
  } */
/* (val) méthode pour afficher le détail : il faut aussi ajouter
private router: Router
dans le constructeur mais ça plante à l'exécution

  showAlimentDetail(aliment, e) {
    e.preventDefault();
     this.alimentService.selectedAliment = aliment ;
     this.router.navigateByUrl('/detail');

  }
  */

