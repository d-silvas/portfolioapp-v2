import { Action, createReducer, on } from '@ngrx/store';

import * as actions from './actions';
import { sbuxDebtAnalysisInitialState, SbuxDebtAnalysisState } from './state';

const reducer = createReducer(
  sbuxDebtAnalysisInitialState,
  on(
    actions.loadSbuxDebtAnalysis,
    (state): SbuxDebtAnalysisState => ({
      ...state,
      debtAnalysis: {
        data: [],
        loading: true,
        error: null,
      },
    })
  ),
  on(
    actions.loadSbuxDebtAnalysisSuccess,
    (state, { sbuxDebtAnalysis }): SbuxDebtAnalysisState => ({
      ...state,
      debtAnalysis: {
        data: sbuxDebtAnalysis,
        loading: false,
        error: null,
      },
    })
  ),
  on(
    actions.loadSbuxDebtAnalysisFail,
    (state, { error }): SbuxDebtAnalysisState => ({
      ...state,
      debtAnalysis: {
        data: [],
        loading: false,
        error,
      },
    })
  ),
  on(actions.reset, () => sbuxDebtAnalysisInitialState)
);

export const sbuxDebtAnalysisReducer = (
  state: SbuxDebtAnalysisState,
  action: Action
) => reducer(state, action);
