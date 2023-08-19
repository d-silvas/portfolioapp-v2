import { createFeatureSelector } from '@ngrx/store';

import { ElState } from './state';

const getElFeatureState = createFeatureSelector<ElState>('el');

// export const getElSegmentInfoAnalysisState = createSelector(
//   getElFeatureState,
//   (state) => state.segmentInfoAnalysis,
// );
