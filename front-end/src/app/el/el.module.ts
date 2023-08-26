import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui';
import { ElComponent } from './el.component';
import { StoreModule } from '@ngrx/store';
import { ElRoutingModule } from './el-routing.module';
import { elReducer } from './store/reducer';
import { PlAnalysisModule } from '../pl-analysis/pl-analysis.module';
import { ElIncomeStatementsComponent } from './el-financial-reports/el-income-statements/el-income-statements.component';
import { ElFinancialReportsEffects } from './el-financial-reports/store/effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [ElComponent, ElIncomeStatementsComponent],
  imports: [
    CommonModule,
    UiModule,
    ElRoutingModule,
    PlAnalysisModule,
    StoreModule.forFeature('el', elReducer),
    EffectsModule.forFeature([ElFinancialReportsEffects]),
  ],
})
export class ElModule {}
