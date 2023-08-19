import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PlAnalysisEffects } from './store/effects';
import { plAnalysisReducer } from './store/reducers';
import { PlAnalysisComponent } from './pl-analysis.component';
import { PlAnalysisGraphComponent } from './pl-analysis-graph/pl-analysis-graph.component';

@NgModule({
  declarations: [PlAnalysisComponent, PlAnalysisGraphComponent],
  imports: [
    CommonModule,
    UiModule,
    StoreModule.forFeature('plAnalysis', plAnalysisReducer),
    EffectsModule.forFeature([PlAnalysisEffects]),
  ],
  exports: [PlAnalysisComponent],
})
export class PlAnalysisModule {}
