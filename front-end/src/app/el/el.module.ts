import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui';
import { ElComponent } from './el.component';
import { StoreModule } from '@ngrx/store';
import { ElRoutingModule } from './el-routing.module';
import { elReducer } from './store/reducer';
import { PlAnalysisModule } from '../pl-analysis/pl-analysis.module';

@NgModule({
  declarations: [ElComponent],
  imports: [
    CommonModule,
    UiModule,
    ElRoutingModule,
    PlAnalysisModule,
    StoreModule.forFeature('el', elReducer),
    // EffectsModule.forFeature([SbuxSegmentInfoAnalysisEffects]),
  ],
})
export class ElModule {}
