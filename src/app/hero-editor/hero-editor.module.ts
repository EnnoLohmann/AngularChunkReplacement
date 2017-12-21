import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroEditorRoutingModule } from './hero-editor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports: [
    CommonModule,
    HeroEditorRoutingModule,
    SharedModule
  ],
  declarations: [EditorComponent]
})
export class HeroEditorModule { }
