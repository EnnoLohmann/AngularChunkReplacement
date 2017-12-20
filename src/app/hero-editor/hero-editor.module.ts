import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroEditorRoutingModule } from './hero-editor-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HeroEditorRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class HeroEditorModule { }
