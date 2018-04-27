import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../personne';

@Component({
  selector: 'app-liste-personne',
  templateUrl: './liste-personne.component.html',
  styleUrls: ['./liste-personne.component.css']
})
export class ListePersonneComponent implements OnInit {
  @Input()
  personnes: Personne[];

  constructor() { }

  ngOnInit() {
  }

}
