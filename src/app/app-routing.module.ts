import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'editor', loadChildren: './hero-editor/hero-editor.module#HeroEditorModule'},
  {path: 'list', loadChildren: './hero-list/hero-list.module#HeroListModule'},
  {path: 'creation', loadChildren: './hero-creation/hero-creation.module#HeroCreationModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
