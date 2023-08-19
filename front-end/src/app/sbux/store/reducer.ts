import { ActionReducerMap } from '@ngrx/store';

import { SbuxState } from './state';
import { sbuxSegmentInfoAnalysisReducer } from '../sbux-segment-info-analysis/store/reducers';
import { sbuxDebtAnalysisReducer } from '../sbux-debt-analysis/store/reducers';

export const sbuxReducer: ActionReducerMap<SbuxState> = {
  segmentInfoAnalysis: sbuxSegmentInfoAnalysisReducer,
  debtAnalysis: sbuxDebtAnalysisReducer,
};
