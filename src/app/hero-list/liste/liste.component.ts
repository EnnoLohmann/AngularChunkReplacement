import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/Domain/Hero';
import { HeroService } from '../../shared/services/hero.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  
  selectedHero: Hero;
  
   heroes: Hero[];
  
   constructor(private heroService: HeroService) { }
  
   ngOnInit() {
     this.getHeroes();
   }
  
   onSelect(hero: Hero): void {
     this.selectedHero = hero;
   }
  
   getHeroes(): void {
     this.heroService.getHeroes()
         .subscribe(heroes => this.heroes = heroes);
   }
}
