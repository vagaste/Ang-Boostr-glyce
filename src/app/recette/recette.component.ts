import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { Aliment } from '../aliment';
import { AlimentService } from '../aliment.service';
import { RecetteService } from '../recette.service';
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
  quantityPortion: number;
  resultCg: number;
  cgRecette: number;
  recette: Recette;
  portion: Portion;
  tableauPortion = [];
  selectedAliment: Aliment;
  energyRecette: number;
  proteinRecette: number;
  carbRecette: number;
  lipidRecette: number;
  fibreRecette: number;
  sugarRecette: number;
  saltRecette: number;


  constructor(public alimentService: AlimentService,
    public recetteService: RecetteService, public router: Router) { }

  ngOnInit() {
    this.prepareAlimentList();
    this.resultCg = 0;

    this.recette = {
      name: '',
      comment: '',
      energy: 0,
      cg: 0,
      protein: 0,
      carb: 0,
      lipid: 0,
      fibre: 0,
      sugar: 0,
      salt: 0,
      portions: []
    };

    this.portion = {
      quantity: 0,
      aliment: null
    };
  }

  stockPortion() {

    // method to calculate glycemic charge
    this.resultCg = ((this.selectedAliment.ig *
      ((this.quantityPortion * this.selectedAliment.carb) / 100)) / 100);
    this.recette.cg = this.recette.cg + this.resultCg;

    // calculation and cumulation nutritionals values for the recipe
    this.recette.energy += this.calculValNut(this.selectedAliment.energy);
    this.recette.protein += this.calculValNut(this.selectedAliment.protein);
    this.recette.carb += this.calculValNut(this.selectedAliment.carb);
    this.recette.lipid += this.calculValNut(this.selectedAliment.lipid);
    this.recette.fibre += this.calculValNut(this.selectedAliment.fibre);
    this.recette.sugar += this.calculValNut(this.selectedAliment.sugar);
    this.recette.salt += this.calculValNut(this.selectedAliment.salt);

    // informations of portion to display on screen
    // and calculation on the portion added
    const tabPortion = {
      idAliment: this.selectedAliment.id,
      nameAliment: this.selectedAliment.name,
      quantityPortion: this.quantityPortion,
      cgPortion: this.resultCg,
      energyPortion: this.calculValNut(this.selectedAliment.energy),
      proteinPortion: this.calculValNut(this.selectedAliment.protein),
      carbPortion: this.calculValNut(this.selectedAliment.carb),
      lipidPortion: this.calculValNut(this.selectedAliment.lipid),
      fibrePortion: this.calculValNut(this.selectedAliment.fibre),
      sugarPortion: this.calculValNut(this.selectedAliment.sugar),
      saltPortion: this.calculValNut(this.selectedAliment.salt)
    };
    this.tableauPortion.push(tabPortion);


    const portionToAdd = {
      quantity: 0,
      aliment: null
    };

    portionToAdd.aliment = this.selectedAliment;
    portionToAdd.quantity = this.quantityPortion;

    this.recette.portions.push(portionToAdd);
    this.displayFn();
    this.quantityPortion = null;
    this.prepareAlimentList();

  }

  // Method to destock the portion displayed
  // the bin button delete this current portion in table
  // and too in the object "recette".
  // cumulations glycemic charge and ntritionnals values are calculating again
  destockPortion(portindex) {
    this.recette.cg = this.recette.cg - this.tableauPortion[portindex].cgPortion;
    this.recette.energy = this.recette.energy - this.tableauPortion[portindex].energyPortion;
    this.recette.protein = this.recette.protein - this.tableauPortion[portindex].proteinPortion;
    this.recette.carb = this.recette.carb - this.tableauPortion[portindex].carbPortion;
    this.recette.lipid = this.recette.lipid - this.tableauPortion[portindex].lipidPortion;
    this.recette.fibre = this.recette.fibre - this.tableauPortion[portindex].fibrePortion;
    this.recette.sugar = this.recette.sugar - this.tableauPortion[portindex].sugarPortion;
    this.recette.salt = this.recette.salt - this.tableauPortion[portindex].saltPortion;

    this.recette.portions.splice(portindex, 1);
    this.tableauPortion.splice(portindex, 1);

  }

  // save recipe in DB
  create() {

    this.recetteService.createRecette(this.recette)
      .subscribe((recette: Recette) => {
        this.recette = recette;
        this.router.navigateByUrl('/recette/liste');
      }, (err) => {
        console.log('erreur !', err);
      }
      );

  }
// method for autocompletion
  prepareAlimentList() {
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
  }

  private _filter(name: string): Aliment[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFn(aliment?: Aliment): string | undefined {
    return aliment ? aliment.name : undefined;
  }

  // method calculate nutritionnal value in accordance with quantity choosen
  calculValNut(valeur) {
    return ((valeur / 100) * this.quantityPortion);
  }

}
