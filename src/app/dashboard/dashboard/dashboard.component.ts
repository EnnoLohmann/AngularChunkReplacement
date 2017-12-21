import { Hero } from './../../shared/Domain/Hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../shared/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

   constructor(private heroService: HeroService) { }

   ngOnInit() {
     this.getHeroes();
   }

   getHeroes(): void {
     this.heroService.getHeroes()
       .subscribe(heroes => this.heroes = heroes.slice(1, 5));
   }

   setActive(index) {
     this.heroService.selectedIndex = index;
   }

}
