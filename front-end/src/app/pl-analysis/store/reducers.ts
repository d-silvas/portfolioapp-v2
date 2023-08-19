import { Action, ActionReducerMap, createReducer, on } from '@ngrx/store';

import * as actions from './actions';
import { plAnalysisInitialState, PlAnalysisState } from './state';

const reducer = createReducer(
  plAnalysisInitialState,
  on(
    actions.loadPlAnalysis,
    (state): PlAnalysisState => ({
      ...state,
      plAnalysisList: {
        data: [],
        loading: true,
        error: null,
      },
    }),
  ),
  on(
    actions.loadPlAnalysisSuccess,
    (state, { plAnalysisList: plAnalysis }): PlAnalysisState => ({
      ...state,
      plAnalysisList: {
        data: plAnalysis,
        loading: false,
        error: null,
      },
    }),
  ),
  on(
    actions.loadPlAnalysisFail,
    (state, { error }): PlAnalysisState => ({
      ...state,
      plAnalysisList: {
        data: [],
        loading: false,
        error,
      },
    }),
  ),
  on(actions.reset, () => plAnalysisInitialState),
);

export const plAnalysisReducer = (state: PlAnalysisState, action: Action) =>
  reducer(state, action);

// export const plAnalysisFeatureReducer: ActionReducerMap<PlAnalysisRootState> = {
//   plAnalysis: plAnalysisReducer,
// };
