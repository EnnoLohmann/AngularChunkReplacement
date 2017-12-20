import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { AlertModule, ModalModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    FormsModule,
    CKEditorModule,
    AlertModule,
    ModalModule
  ],
  declarations: []
})
export class SharedModule { }
