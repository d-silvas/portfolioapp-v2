import type { AppState } from '../../store/state';
import type { ElFinancialReportsState } from '../el-financial-reports/store/state';

export interface ElRootState extends AppState {
  el: ElState;
}

export interface ElState {
  // segmentInfoAnalysis: SbuxSegmentInfoAnalysisState;
  financialReports: ElFinancialReportsState;
}
