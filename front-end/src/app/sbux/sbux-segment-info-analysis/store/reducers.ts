import { Action, createReducer, on } from '@ngrx/store';

import * as actions from './actions';
import {
  sbuxSegmentInfoAnalysisInitialState,
  SbuxSegmentInfoAnalysisState,
} from './state';

const reducer = createReducer(
  sbuxSegmentInfoAnalysisInitialState,
  on(
    actions.loadSbuxSegmentInfoAnalysis,
    (state): SbuxSegmentInfoAnalysisState => ({
      ...state,
      segmentInfoAnalysis: {
        data: [],
        loading: true,
        error: null,
      },
    })
  ),
  on(
    actions.loadSbuxSegmentInfoAnalysisSuccess,
    (state, { sbuxSegmentInfoAnalysis }): SbuxSegmentInfoAnalysisState => ({
      ...state,
      segmentInfoAnalysis: {
        data: sbuxSegmentInfoAnalysis,
        loading: false,
        error: null,
      },
    })
  ),
  on(
    actions.loadSbuxSegmentInfoAnalysisFail,
    (state, { error }): SbuxSegmentInfoAnalysisState => ({
      ...state,
      segmentInfoAnalysis: {
        data: [],
        loading: false,
        error,
      },
    })
  ),
  on(actions.reset, () => sbuxSegmentInfoAnalysisInitialState)
);

export const sbuxSegmentInfoAnalysisReducer = (
  state: SbuxSegmentInfoAnalysisState,
  action: Action
) => reducer(state, action);
