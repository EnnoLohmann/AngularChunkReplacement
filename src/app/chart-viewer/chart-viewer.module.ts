import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartViewerRoutingModule } from './chart-viewer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChartViewerRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class ChartViewerModule { }
