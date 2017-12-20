import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCreationRoutingModule } from './hero-creation.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HeroCreationRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class HeroCreationModule { }
