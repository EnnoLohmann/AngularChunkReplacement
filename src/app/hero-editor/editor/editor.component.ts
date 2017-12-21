import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/Domain/Hero';
import { HeroService } from '../../shared/services/hero.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  hero;
 
  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.hero = this.heroService.getSelectedHero();
  }
 
}
