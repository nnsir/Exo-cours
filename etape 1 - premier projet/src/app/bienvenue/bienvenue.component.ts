import { Component, OnInit } from '@angular/core';
import {Personne} from '../personne';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.css']
})
export class BienvenueComponent implements OnInit {
  personneConnecte: Personne;

  constructor() { }

  ngOnInit() {
    this.personneConnecte = new Personne('Lecocq', 'Cédric');
  }

}
