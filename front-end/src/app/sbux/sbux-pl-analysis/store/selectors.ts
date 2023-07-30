import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SbuxPlAnalysisState } from './state';

export const getSbuxPlAnalysisState =
  createFeatureSelector<SbuxPlAnalysisState>('sbuxPlAnalysis');

export const getSbuxPlAnalysis = createSelector(
  getSbuxPlAnalysisState,
  (state: SbuxPlAnalysisState) => state.plAnalysis.data
);
