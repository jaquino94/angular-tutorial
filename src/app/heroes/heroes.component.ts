import { Component, OnInit } from '@angular/core';
import { HEROES } from '../heroes';
import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES

  constructor() { 
  }

  ngOnInit(): void {
  }
  
  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

}
