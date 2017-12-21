import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'editor', loadChildren: './hero-editor/hero-editor.module#HeroEditorModule'},
  {path: 'list', loadChildren: './hero-list/hero-list.module#HeroListModule'},
  {path: 'creation', loadChildren: './hero-creation/hero-creation.module#HeroCreationModule'},
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path: 'chart', loadChildren: './chart-viewer/chart-viewer.module#ChartViewerModule'}  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
