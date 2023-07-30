import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbuxPlAnalysisComponent } from './sbux-pl-analysis/sbux-pl-analysis.component';
import { UiModule } from '../ui';
import { SbuxComponent } from './sbux.component';
import { StoreModule } from '@ngrx/store';
import { sbuxPlAnalysisReducer } from './sbux-pl-analysis/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { SbuxPlAnalysisEffects } from './sbux-pl-analysis/store/effects';
import { SbuxRoutingModule } from './sbux-routing.module';
import { SbuxPlAnalysisGraphComponent } from './sbux-pl-analysis/sbux-pl-analysis-graph/sbux-pl-analysis-graph.component';

@NgModule({
  declarations: [
    SbuxComponent,
    SbuxPlAnalysisComponent,
    SbuxPlAnalysisGraphComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    SbuxRoutingModule,
    StoreModule.forFeature('sbuxPlAnalysis', sbuxPlAnalysisReducer),
    EffectsModule.forFeature([SbuxPlAnalysisEffects]),
  ],
})
export class SbuxModule {}
