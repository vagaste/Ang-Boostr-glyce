import { Component, OnInit } from '@angular/core';
import { RecetteService } from 'src/app/recette.service';
import { Recette } from 'src/app/recette';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-list-recettes',
  templateUrl: './list-recettes.component.html',
  styleUrls: ['./list-recettes.component.css']
})
export class ListRecettesComponent implements OnInit {

listRecette: Recette[] = [];
selectedRecette: Recette;
recetteId: number;
  constructor(public recetteService: RecetteService, public router: Router) {

     // override the route reuse strategy
     this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };

   this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         // trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
         // if you need to scroll back to top, here is the right place
         window.scrollTo(0, 0);
      }
  });
   }

  ngOnInit() {
    this.getListRecette();
    }


  getListRecette() {
    this.recetteService.getAll().subscribe((listRecette: Recette[]) => {
      this.listRecette =  listRecette;
      if (this.listRecette && this.listRecette.length > 0) {
        // by default selectedRecette will be the first recipe of the list, if there is a list
        this.selectedRecette = this.listRecette[0];
      }
    });
  }


  selectRecette(selectedRecette: Recette) {
    this.selectedRecette = selectedRecette ;
  }

  // method to delete a recipe in DB
  deleteRecette(Id: number) {
      this.recetteService.removeRecetteById(Id).subscribe(() => {
      this.router.navigateByUrl('/recette/liste');
    }, (err) => {
      console.log('erreur !', err);
    }
    );
  }
}
