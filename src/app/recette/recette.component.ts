import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { Aliment } from '../aliment';
import { AlimentService } from '../aliment.service';
import { RecetteService } from '../recette.service';
import { PortionService } from '../portion.service';
import { Recette } from '../recette';
import { Portion } from '../portion';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})

export class RecetteComponent implements OnInit {
  myControl = new FormControl();
  options: Aliment[];
  filteredOptions: Observable<Aliment[]>;
  cptr: number;
  quantityPortion: number;
  resultCg: number;
  cgRecette: number;
  recette: Recette;
  portion: Portion;
  tableauPortion = [];
  selectedAliment: Aliment;

  constructor(public alimentService: AlimentService,
    public recetteService: RecetteService, public portionService: PortionService) { }

  ngOnInit() {
    // ici on alimente option avec l'aliment service pour l'autocomplete
    // mettre un subscribe quand on communiquera avec le back + mettre l'url du
    // back dans le service

    this.alimentService.getAll().subscribe((listAliments: Aliment[]) => {
      this.options = listAliments;
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith<string | Aliment>(''),
          tap(value => {
            if (typeof value !== 'string') {
              this.selectedAliment = value;
            }
          }),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.options.slice())
        );

    });
    this.cptr = 0;
    this.quantityPortion = 0;
    this.resultCg = 0;
    this.cgRecette = 0;

    this.recette = {
      name: '',
      cg: 0,
      portions: []
    };

    this.portion = {
      quantity: 0,
      aliment: null
    };
  }

  stockPortion() {
    console.log('méthode stockPortion');
    this.resultCg = ((this.selectedAliment.ig *
      ((this.quantityPortion * this.selectedAliment.carb) / 100)) / 100);
    this.cgRecette = this.cgRecette + this.resultCg;
    this.cptr = this.cptr + 1;

    // on stocke les infos dans une liste pour les afficher à l'écran
    const tabPortion = {
      idAliment: this.selectedAliment.id,
      nameAliment: this.selectedAliment.name,
      quantityPortion: this.quantityPortion,
      cgPortion: this.resultCg
    };

    this.tableauPortion.push(tabPortion);

  // on sauvegarde l'aliment et la portion
    this.portion.aliment = this.selectedAliment;
    console.log('portion aliment = ' + this.portion.aliment);
    this.portion.quantity = this.quantityPortion;
    console.log('portion quantity = ' + this.portion.quantity);
    console.log('portion = ' + this.portion);
    this.recette.portions.push(this.portion);
  }

  create() {

    this.recette.cg = this.cgRecette;
    console.log('recette cg = ' + this.recette.cg);
    console.log('recette NAME = ' + this.recette.name);
    console.log('portion = ' + this.portion) ;
    console.log('this recette.portions = ' + this.recette.portions) ;

    this.recetteService.createRecette(this.recette)
      .subscribe((recette: Recette) => {
        this.recette = recette;
      });

  }

  private newMethod() {
    return this;
  }

  displayFn(aliment?: Aliment): string | undefined {
    return aliment ? aliment.name : undefined;
  }
  private _filter(name: string): Aliment[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
