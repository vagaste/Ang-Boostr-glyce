import { MatMenuModule,
         MatToolbarModule,
         MatInputModule,
         MatFormFieldModule,
         MatSliderModule,
         MatOptionModule,
         MatSelectModule,
         MatIconModule,
         MatAutocompleteModule,
         MatListModule,
         MatGridListModule,
         MatCardModule,
         MatChipsModule
        } from '@angular/material';
import { FormsModule,
         ReactiveFormsModule} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, AfterViewInit } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlimentService } from './aliment.service';
import { RouterModule, Routes } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { RecetteComponent } from './recette/recette.component';
import { AlimentsComponent } from './aliments/aliments.component';
import { HttpClientModule } from '@angular/common/http';
import { ListRecettesComponent } from './list-recettes/list-recettes.component';
import { RecetteDetailComponent } from './recette-detail/recette-detail.component';


const routes: Routes = [

// path = ' ' signifie que si on a du blanc dans l'url après la home page, le
// routeur nous affiche la page aliment par défaut
// path = "**" : s'il y a n'importe quoi dans l'url, le routeur nous affiche la page aliment
// L'ordre des chemins est important
// patchMatch : il faut que ça corresponde exactement à ce qui est mis dans le path

  { path: '', redirectTo: '/aliments', pathMatch: 'full' },

  {
   path: 'aliments',
    component: AlimentsComponent},

  {
    path: 'recette/liste',
    component: ListRecettesComponent},

  {
    path: 'recette/create',
    component: RecetteComponent},

  /* {
    path: 'recette/:id',
    component: RecetteComponent}, */

  {
    path: '**',
    component: AlimentsComponent}
   ] ;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    RecetteComponent,
    AlimentsComponent,
    ListRecettesComponent,
    RecetteDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatOptionModule,
    MatSelectModule,
    FlexLayoutModule,
    RouterModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatAutocompleteModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule
    ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule

  ],
  providers: [AlimentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
