import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartViewerRoutingModule } from './chart-viewer-routing.module';
import { ViewerComponent } from './viewer/viewer.component';

@NgModule({
  imports: [
    CommonModule,
    ChartViewerRoutingModule,
    SharedModule
  ],
  declarations: [ViewerComponent]
})
export class ChartViewerModule { }
