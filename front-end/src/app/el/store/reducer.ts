import { ActionReducerMap } from '@ngrx/store';

import type { ElState } from './state';
import { elFinancialReportsReducer } from '../el-financial-reports/store/reducers';

export const elReducer: ActionReducerMap<ElState> = {
  // segmentInfoAnalysis: elSegmentInfoAnalysisReducer,
  financialReports: elFinancialReportsReducer,
};
