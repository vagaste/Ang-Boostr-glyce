import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { AlimentService } from '../aliment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  // (val) ici on injecte le service AlimentService : nom + type. L'injection permet de
  // déclarer ici l'objet "aliments"
  constructor(public alimentService: AlimentService) { }

  aliments;
  ngOnInit() {
    // (val) le composant est prêt à être utilisé : mettre son code ici
    // l'objet aliment est alimenté avec l'objet aliment déclaré dans le service alimentService
    this.aliments = this.alimentService.selectedAliment;
  }

  public formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value;
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
