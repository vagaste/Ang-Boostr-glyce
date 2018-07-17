import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder,
         FormGroup } from '@angular/forms';
import { AlimentService } from '../aliment.service';
import { Aliment } from '../aliment';
import { Sort, MatPaginator, MatTableDataSource} from '@angular/material';

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
  @ViewChild(MatPaginator) paginator: MatPaginator;

    // ici on injecte le service AlimentService : nom + type. L'injection permet de
    // déclarer ici l'objet "aliments"
    constructor(public alimentService: AlimentService) {

    }

    ngOnInit () {
      // le composant est prêt à être utilisé : mettre son code ici
      // l'objet aliment est alimenté avec l'objet aliment déclaré dans le service alimentService
      // this.sortedAliments.paginator = this.paginator;

      this.alimentService.getAll().subscribe((listAliments: Aliment[]) => {
        this.listAliments = listAliments;
        this.sortedAliments = new MatTableDataSource < Aliment >(this.listAliments);
      });


      this.alimentSelected = {
        id: 0,
        name: '',
        category: null,
        energy: 0,
        ig: 0,
        protein: 0,
        carb: 0,
        sugar: 0,
        lipid: 0,
        fibre: 0,
        salt: 0,
        cg: 0
    };

    this.resultCg = 0;
    this.quantityAliment = 0;
    }

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
            case 'category': return compare(a.category, b.category, isAsc);
            case 'energy': return comparenum(a.energy, b.energy, isAsc);
            case 'ig': return comparenum(a.ig, b.ig, isAsc);
            case 'cg': return comparenum(a.cg, b.cg, isAsc);
            default: return 0;
          }
        });
    }
    selectAliment (aliment, e) {
        e.preventDefault();
        this.alimentSelected = aliment ;

    }

    calculCg (alimentSelected, quantity) {
      if (alimentSelected.ig === '') {
      this.resultCg = 0;
      }

      this.resultCg = ((alimentSelected.ig * ((quantity * alimentSelected.carb) / 100)) / 100);
    }
  }

  function comparenum(a, b, isAsc) {
    return (parseFloat(a) < parseFloat(b) ? -1 : 1) * (isAsc ? 1 : -1);
  }
  function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
