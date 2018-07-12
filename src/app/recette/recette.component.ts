import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Aliment } from '../aliment';
import { AlimentService } from '../aliment.service';

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

  constructor(public alimentService: AlimentService) { }

  ngOnInit() {
// ici on alimente option avec l'aliment service pour l'autocomplete
// mettre un subscribe quand on communiquera avec le back

    this.options = this.alimentService.searchedAliments;
    this.cptr = 0;
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith<string | Aliment>(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.options.slice())
    );
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