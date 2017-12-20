import { Hero } from './../Domain/Hero';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeroService {

  selectedIndex = 0;

   heroes: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  heroSubject = new Subject<Hero[]>();

  constructor() {
    this.heroSubject.next(this.heroes);
   }

  getSelectedHero() {
    return this.heroes[this.selectedIndex];
  }

  getHeroes() {
    return this.heroSubject;
  }

  addHero(hero: Hero) {
    this.heroes.push(hero);
    this.heroSubject.next(this.heroes);
  }

}
