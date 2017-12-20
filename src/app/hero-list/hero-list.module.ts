import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListRoutingModule } from './hero-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HeroListRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class HeroListModule { }
