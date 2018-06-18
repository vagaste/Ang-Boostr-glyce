import { MatMenuModule, MatToolbarModule, MatInputModule,
  MatFormFieldModule, MatSliderModule, MatOptionModule, MatOption, MatSelect, MatSelectModule} from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlimentService } from './aliment.service';
import { RouterModule } from '@angular/router';


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
    RouterModule
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
