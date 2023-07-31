import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SbuxState } from './state';

const getSbuxFeatureState = createFeatureSelector<SbuxState>('sbux');

export const getSbuxPlAnalysisState = createSelector(
  getSbuxFeatureState,
  (state) => state.plAnalysis
);

export const getSbuxSegmentInfoAnalysisState = createSelector(
  getSbuxFeatureState,
  (state) => state.segmentInfoAnalysis
);

export const getSbuxDebtAnalysisState = createSelector(
  getSbuxFeatureState,
  (state) => state.segmentInfoAnalysis
);
