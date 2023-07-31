import { createSelector } from '@ngrx/store';

import { SbuxPlAnalysisState } from './state';
import { getSbuxPlAnalysisState } from '../../store/selectors';

export const getSbuxPlAnalysis = createSelector(
  getSbuxPlAnalysisState,
  (state: SbuxPlAnalysisState) => state.plAnalysis.data
);
