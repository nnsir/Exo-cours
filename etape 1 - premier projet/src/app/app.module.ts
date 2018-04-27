import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
