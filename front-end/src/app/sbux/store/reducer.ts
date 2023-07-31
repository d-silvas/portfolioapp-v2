import { ActionReducerMap } from '@ngrx/store';

import { SbuxState } from './state';
import { sbuxPlAnalysisReducer } from '../sbux-pl-analysis/store/reducers';
import { sbuxSegmentInfoAnalysisReducer } from '../sbux-segment-info-analysis/store/reducers';
import { sbuxDebtAnalysisReducer } from '../sbux-debt-analysis/store/reducers';

export const sbuxReducer: ActionReducerMap<SbuxState> = {
  plAnalysis: sbuxPlAnalysisReducer,
  segmentInfoAnalysis: sbuxSegmentInfoAnalysisReducer,
  debtAnalysis: sbuxDebtAnalysisReducer,
};
