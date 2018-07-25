import { Component, OnInit, Input } from '@angular/core';
import { Recette } from 'src/app/recette';
import { ListRecettesComponent } from '../list-recettes/list-recettes.component';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.css']
})
export class RecetteDetailComponent implements OnInit {

  // correspond a selectedRecette de ListRecettesComponent car ce composant est un composant enfant de ListRecette (appelé ds le HTML)
@Input() recette: Recette;

  constructor() { }

  ngOnInit() {
  }

}
