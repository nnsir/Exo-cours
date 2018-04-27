import { Component, OnInit } from '@angular/core';
import { Personne } from './personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  listePersonne: Personne[] = [];

  constructor() {
  }

  ngOnInit() {

    this.listePersonne.push(new Personne(1, 'Lecocq', 'clecocq', 'clecocq@zepto-technology.fr', '0123456789',
      'www.zepto-technology.fr', '5 rue des noisettes', 'Zepto Technology'),
      new Personne(2, 'Dupont', 'dupontd', 'dupontd@monceau.fr', '9876543210',
      'www.monceau.fr', '8 rue du parc', 'Monceau'),
      new Personne(3, 'Haddock', 'haddockc', 'capitaine@monceau.fr', '9876543210',
      'www.monceau.fr', '9 rue du parc', 'Monceau'),
      new Personne(4, 'Tournesol', 'tournesolp', 'tournesolp@monceau.fr', '9876543210',
      'www.monceau.fr', '10 rue du parc', 'Monceau'),
      new Personne(5, 'Fantomas', 'fantomas', 'fantomas@mystere.fr', '0000000000', 'www.fantomas.fr',
        '123 impasse de l\'inconnu', 'Mystère'));

  }
}
