import { Action, createReducer, on } from '@ngrx/store';

import * as actions from './actions';
import { sbuxPlAnalysisInitialState, SbuxPlAnalysisState } from './state';

const reducer = createReducer(
  sbuxPlAnalysisInitialState,
  on(
    actions.loadSbuxPlAnalysis,
    (state): SbuxPlAnalysisState => ({
      ...state,
      plAnalysis: {
        data: [],
        loading: true,
        error: null,
      },
    })
  ),
  on(
    actions.loadSbuxPlAnalysisSuccess,
    (state, { sbuxPlAnalysis }): SbuxPlAnalysisState => ({
      ...state,
      plAnalysis: {
        data: sbuxPlAnalysis,
        loading: false,
        error: null,
      },
    })
  ),
  on(
    actions.loadSbuxPlAnalysisFail,
    (state, { error }): SbuxPlAnalysisState => ({
      ...state,
      plAnalysis: {
        data: [],
        loading: false,
        error,
      },
    })
  ),
  on(actions.reset, () => sbuxPlAnalysisInitialState)
);

export const sbuxPlAnalysisReducer = (
  state: SbuxPlAnalysisState,
  action: Action
) => reducer(state, action);
