import { createFeatureSelector, createSelector } from '@ngrx/store';

import type { ElState } from './state';

const getElFeatureState = createFeatureSelector<ElState>('el');

// export const getElSegmentInfoAnalysisState = createSelector(
//   getElFeatureState,
//   (state) => state.segmentInfoAnalysis,
// );

export const getElFinancialReportsState = createSelector(
  getElFeatureState,
  (state) => state.financialReports,
);
