import { MatMenuModule,
         MatToolbarModule,
         MatInputModule,
         MatFormFieldModule,
         MatSliderModule,
         MatOptionModule,
<<<<<<< HEAD
         MatSelectModule
=======
         MatSelectModule,
         MatTableDataSource,
         MatIconModule
>>>>>>> e4032ec4effcd29f7f7d011683269d129135265f
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
import { RouterModule } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
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
<<<<<<< HEAD
    CdkTableModule
  ],
=======
    MatIconModule
    ],
>>>>>>> e4032ec4effcd29f7f7d011683269d129135265f
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule

  ],
  providers: [AlimentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
