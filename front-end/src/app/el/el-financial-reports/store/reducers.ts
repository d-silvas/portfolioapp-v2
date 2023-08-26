import { Action, createReducer, on } from '@ngrx/store';

import * as actions from './actions';
import {
  type ElFinancialReportsState,
  elFinancialReportsInitialState,
} from './state';

const reducer = createReducer(
  elFinancialReportsInitialState,
  on(
    actions.loadElFinancialReports,
    (state): ElFinancialReportsState => ({
      ...state,
      financialReports: {
        data: [],
        loading: true,
        error: null,
      },
    }),
  ),
  on(
    actions.loadElFinancialReportsSuccess,
    (
      state,
      { elFinancialReports: sbuxDebtAnalysis },
    ): ElFinancialReportsState => ({
      ...state,
      financialReports: {
        data: sbuxDebtAnalysis,
        loading: false,
        error: null,
      },
    }),
  ),
  on(
    actions.loadElFinancialReportsFail,
    (state, { error }): ElFinancialReportsState => ({
      ...state,
      financialReports: {
        data: [],
        loading: false,
        error,
      },
    }),
  ),
  on(actions.reset, () => elFinancialReportsInitialState),
);

export const elFinancialReportsReducer = (
  state: ElFinancialReportsState,
  action: Action,
) => reducer(state, action);
