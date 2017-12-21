import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListRoutingModule } from './hero-list-routing.module';
import { ListeComponent } from './liste/liste.component';

@NgModule({
  imports: [
    CommonModule,
    HeroListRoutingModule,
    SharedModule
  ],
  declarations: [ListeComponent]
})
export class HeroListModule { }
