import { Component, OnInit, ViewChild } from '@angular/core';
import { AlimentService } from '../aliment.service';
import { Aliment } from '../aliment';
import { Sort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-aliments',
  templateUrl: './aliments.component.html',
  styleUrls: ['./aliments.component.css']
})
export class AlimentsComponent implements OnInit {

  quantityAliment: number;
  alimentSelected: Aliment;
  resultCg: number;
  displayedColumns = ['name', 'category', 'energy', 'ig', 'cg'];
  listAliments: Aliment[] = [];
  sortedAliments;
  alimentToDisplay: Aliment;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public alimentService: AlimentService) {

  }

  ngOnInit() {

    // calling DB
    this.alimentService.getAll().subscribe((listAliments: Aliment[]) => {
      this.listAliments = listAliments;
      this.sortedAliments = new MatTableDataSource<Aliment>(this.listAliments);
    });

    this.resultCg = 0;
    this.quantityAliment = 0;
  }

// method to sort list of aliments
  sortData(sort: Sort) {
    const data = this.listAliments.slice();
    this.sortedAliments.paginator = this.paginator;
    if (!sort.active || sort.direction === '') {
      return this.sortedAliments = data;
    }
    return this.sortedAliments = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'category': return compare(a.category.name, b.category.name, isAsc);
        case 'energy': return comparenum(a.energy, b.energy, isAsc);
        case 'ig': return comparenum(a.ig, b.ig, isAsc);
        case 'cg': return comparenum(a.cg, b.cg, isAsc);
        default: return 0;
      }
    });
    function comparenum(a, b, isAsc) {
      return (parseFloat(a) < parseFloat(b) ? -1 : 1) * (isAsc ? 1 : -1);
    }
    function compare(a, b, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }


  // automatic calculation of the glycemic load, when we select an aliment, at first on 100g
  selectAliment(aliment, e) {
    e.preventDefault();
    this.alimentSelected = aliment;
    // quantity by default
    this.quantityAliment = 100;
    this.calculCg();
    // focus on the field "quantity"
    document.getElementById('focus').focus();
  }

  // method to calculate glycemique charge
  calculCg() {
    if (this.alimentSelected) {
      this.resultCg = ((this.alimentSelected.ig * ((this.quantityAliment * this.alimentSelected.carb) / 100)) / 100);
    }
  }

  // method who let to display a div element with aliment's details
  displayDetailsAliment(alimentId: number) {
    document.getElementById('btnDetailOn_' + alimentId).style.display = 'none';
    document.getElementById('btnDetailOff_' + alimentId).style.display = 'initial';
    document.getElementById('divDetail_' + alimentId).style.display = 'initial';
  }

// method who let to hide a div element with aliment's details
  closeDetailsAliment(alimentId: number) {
    document.getElementById('btnDetailOn_' + alimentId).style.display = 'initial';
    document.getElementById('btnDetailOff_' + alimentId).style.display = 'none';
    document.getElementById('divDetail_' + alimentId).style.display = 'none';
  }
}
