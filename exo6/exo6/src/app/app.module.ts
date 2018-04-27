import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { ListePersonneComponent } from './liste-personne/liste-personne.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenueComponent,
    ListePersonneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
