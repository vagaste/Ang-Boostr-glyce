import { Component, OnInit, Input } from '@angular/core';
import { Recette } from 'src/app/recette';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.css']
})
export class RecetteDetailComponent implements OnInit {

@Input() recette: Recette;

  constructor() { }

  ngOnInit() {
  }

}
