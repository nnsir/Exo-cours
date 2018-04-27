import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.css']
})
export class BienvenueComponent implements OnInit {
  personneConnecte: Personne;

  constructor() { }

  ngOnInit() {
    this.personneConnecte = new Personne(95, 'Cédric', 'cedric', 'clecocq@zepto-technology.fr', '0123456789',
      'www.zepto-technology.fr', '15 rue des noisettes', 'Zepto Technology');
  }

}
