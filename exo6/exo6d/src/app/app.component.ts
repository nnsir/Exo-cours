import { Component, OnInit } from '@angular/core';
import { Personne } from './personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  personne: Personne;
  personnes: Personne[];

  constructor() {
  }

  ngOnInit() {
    this.personne = new Personne(95, 'Cédric Lecocq', 'cedric', 'clecocq@zepto-technology.fr', '0123456789',
      'www.zepto-technology.fr', '15 rue des noisettes', 'Zepto Technology');

    this.personnes = [new Personne(95, 'Henri Martin', 'henri', 'henri@example.com', '0123456789',
      'www.example.com', 'there', 'Example'),
      new Personne(95, 'Cédric Lecocq', 'cedric', 'clecocq@zepto-technology.fr', '0123456789',
        'www.zepto-technology.fr', '15 rue des noisettes', 'Zepto Technology'),
      new Personne(95, 'Cédric Lecocq', 'cedric', 'clecocq@zepto-technology.fr', '0123456789',
        'www.zepto-technology.fr', '15 rue des noisettes', 'Zepto Technology'),
      new Personne(95, 'Cédric Lecocq', 'cedric', 'clecocq@zepto-technology.fr', '0123456789',
        'www.zepto-technology.fr', '15 rue des noisettes', 'Zepto Technology')];
  }

  onDeconnect(boolean) {
    console.log(`deconnecte: ${boolean}`);
  }

}
