import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Aliment } from '../aliment';
import { AlimentService } from '../aliment.service';
import { RecetteService } from '../recette.service';
import { PortionService } from '../portion.service';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})

export class RecetteComponent implements OnInit {
  myControl = new FormControl();
  options: Aliment[];
  filteredOptions: Observable<Aliment[]>;
  resultCg: number;
  cptr: number;
  quantityPortion: number;
  cgPortion: number;
  recette: RecetteService;
  portion: PortionService;
  tableauPortion;

  constructor(public alimentService: AlimentService,
    public recetteService: RecetteService, public portionService: PortionService) { }

  ngOnInit() {
// ici on alimente option avec l'aliment service pour l'autocomplete
// mettre un subscribe quand on communiquera avec le back + mettre l'url du
// back dans le service

    this.options = this.alimentService.searchedAliments;
    this.recette = this.recetteService;
    this.cptr = 0;
    this.quantityPortion = 0;
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith<string | Aliment>(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.options.slice())
    );

    this.resultCg = 0;

      this.portion = {
        id: null,
        quantity: 0,
        fk_idaliment: null,
        fk_idrecette: null
      };

      this.tableauPortion = [{
        idAliment: 0,
        nameAliment: '',
        quantityPortion: 0,
        cgPortion: 0
      }];

      }

  nbrAliments () {

    this.cptr = this.cptr + 1;
    console.log('cptr = ' + this.cptr);
  }

  displayFn(aliment?: Aliment): string | undefined {
    return aliment ? aliment.name : undefined;
  }
  private _filter(name: string): Aliment[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
