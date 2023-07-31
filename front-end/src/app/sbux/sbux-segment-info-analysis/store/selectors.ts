import { createSelector } from '@ngrx/store';

import { SbuxSegmentInfoAnalysisState } from './state';
import { getSbuxSegmentInfoAnalysisState } from '../../store/selectors';

export const getSbuxSegmentInfoAnalysis = createSelector(
  getSbuxSegmentInfoAnalysisState,
  (state: SbuxSegmentInfoAnalysisState) => state.segmentInfoAnalysis.data
);
