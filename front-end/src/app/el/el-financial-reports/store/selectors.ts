import { createSelector } from '@ngrx/store';

import type { ElFinancialReportsState } from './state';
import { getElFinancialReportsState } from '../../store/selectors';

export const getElFinancialReports = createSelector(
  getElFinancialReportsState,
  (state: ElFinancialReportsState) => state.financialReports.data,
);
