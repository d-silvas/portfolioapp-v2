import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui';
import { SbuxComponent } from './sbux.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SbuxRoutingModule } from './sbux-routing.module';
import { sbuxReducer } from './store/reducer';
import { SbuxSegmentInfoAnalysisComponent } from './sbux-segment-info-analysis/sbux-segment-info-analysis.component';
import { SbuxSegmentInfoAnalysisEffects } from './sbux-segment-info-analysis/store/effects';
import { PlAnalysisModule } from '../pl-analysis/pl-analysis.module';
import { SbuxRevenueCompositionGraphComponent } from './sbux-segment-info-analysis/sbux-revenue-composition-graph/sbux-revenue-composition-graph.component';
import { SbuxStoresPerRegionGraphComponent } from './sbux-segment-info-analysis/sbux-stores-per-region-graph/sbux-stores-per-region-graph.component';
import { SbuxRevenuePerStoreGraphComponent } from './sbux-segment-info-analysis/sbux-revenue-per-store/sbux-revenue-per-store-graph.component';

@NgModule({
  declarations: [
    SbuxComponent,
    SbuxSegmentInfoAnalysisComponent,
    SbuxRevenueCompositionGraphComponent,
    SbuxStoresPerRegionGraphComponent,
    SbuxRevenuePerStoreGraphComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    SbuxRoutingModule,
    PlAnalysisModule,
    StoreModule.forFeature('sbux', sbuxReducer),
    EffectsModule.forFeature([SbuxSegmentInfoAnalysisEffects]),
  ],
})
export class SbuxModule {}
