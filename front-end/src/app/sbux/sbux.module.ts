import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbuxPlAnalysisComponent } from './sbux-pl-analysis/sbux-pl-analysis.component';
import { UiModule } from '../ui';
import { SbuxComponent } from './sbux.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SbuxPlAnalysisEffects } from './sbux-pl-analysis/store/effects';
import { SbuxRoutingModule } from './sbux-routing.module';
import { SbuxPlAnalysisGraphComponent } from './sbux-pl-analysis/sbux-pl-analysis-graph/sbux-pl-analysis-graph.component';
import { sbuxReducer } from './store/reducer';
import { SbuxSegmentInfoAnalysisComponent } from './sbux-segment-info-analysis/sbux-segment-info-analysis.component';
import { SbuxSegmentInfoAnalysisEffects } from './sbux-segment-info-analysis/store/effects';
import { PlAnalysisModule } from '../pl-analysis/pl-analysis.module';

@NgModule({
  declarations: [
    SbuxComponent,
    SbuxPlAnalysisComponent,
    SbuxPlAnalysisGraphComponent,
    SbuxSegmentInfoAnalysisComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    SbuxRoutingModule,
    PlAnalysisModule,
    StoreModule.forFeature('sbux', sbuxReducer),
    EffectsModule.forFeature([
      SbuxPlAnalysisEffects,
      SbuxSegmentInfoAnalysisEffects,
    ]),
  ],
})
export class SbuxModule {}
