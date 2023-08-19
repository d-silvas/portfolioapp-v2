import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PlAnalysisState } from './state';

const getPlAnalysisFeatureState =
  createFeatureSelector<PlAnalysisState>('plAnalysis');

export const getPlAnalysisList = createSelector(
  getPlAnalysisFeatureState,
  (state: PlAnalysisState) => state.plAnalysisList.data,
);
