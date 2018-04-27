import {Component, Input} from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.css']
})
export class BienvenueComponent {
  @Input()
  personneConnecte: Personne;

  constructor() { }
}
