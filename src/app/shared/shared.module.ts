import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { AlertModule, ModalModule } from 'ngx-bootstrap';
import { DummyComponent } from './dummy/dummy.component';
import { HeroService } from './services/hero.service';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ChartsModule
  ],
  exports: [
    FormsModule,
    CKEditorModule,
    AlertModule,
    ModalModule,
    ChartsModule
  ],
  declarations: [DummyComponent]
})
export class SharedModule { }
