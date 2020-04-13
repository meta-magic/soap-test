import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSoapModule } from 'ngx-soap';
import { HttpClientModule } from '@angular/common/http';
import { AmexioWidgetModule } from "amexio-ng-extensions"; // Import Amexio library
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AmexioWidgetModule,
    FormsModule,
    NgxSoapModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
