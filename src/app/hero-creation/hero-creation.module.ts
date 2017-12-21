import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCreationRoutingModule } from './hero-creation.routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreationComponent } from './creation/creation.component';

@NgModule({
  imports: [
    CommonModule,
    HeroCreationRoutingModule,
    SharedModule
  ],
  declarations: [
    CreationComponent
  ]
})
export class HeroCreationModule { }
