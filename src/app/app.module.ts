import { MatMenuModule, MatToolbarModule, MatInputModule,
  MatFormFieldModule, MatSliderModule, MatOptionModule, MatOption, MatSelect, MatSelectModule} from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule} from '@angular/flex-layout';


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
<<<<<<< HEAD
    FlexLayoutModule

=======
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatOptionModule,
    MatSelectModule,
    FlexLayoutModule
>>>>>>> d27db67be130c9c9b0d942e036ba128e5699da8c
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
