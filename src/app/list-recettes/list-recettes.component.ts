import { Component, OnInit } from '@angular/core';
import { RecetteService } from 'src/app/recette.service';
import { Recette } from 'src/app/recette';

@Component({
  selector: 'app-list-recettes',
  templateUrl: './list-recettes.component.html',
  styleUrls: ['./list-recettes.component.css']
})
export class ListRecettesComponent implements OnInit {

listRecette: Recette[] = [];
selectedRecette: Recette;
  constructor(public recetteService: RecetteService) { }

  ngOnInit() {
    this.recetteService.getAll().subscribe((listRecette: Recette[]) => {
      this.listRecette =  listRecette;
      if (this.listRecette && this.listRecette.length > 0) {
        this.selectedRecette = this.listRecette[0];
      }
    });
  }

  selectRecette(selectedRecette: Recette) {
    this.selectedRecette = selectedRecette ;
  }

}
