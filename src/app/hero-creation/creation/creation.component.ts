import { Hero } from './../../shared/Domain/Hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../shared/services/hero.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  newHero: Hero = new Hero();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  createHero(){
    this.heroService.addHero(this.newHero);
  }

}
