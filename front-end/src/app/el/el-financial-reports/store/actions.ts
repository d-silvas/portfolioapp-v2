import { createAction, props } from '@ngrx/store';
import type { ElFinancialReport } from '../models';

export enum ElFinancialReportsActionTypes {
  loadElFinancialReports = '[El Financial Reports] Load El Financial Reports',
  loadElFinancialReportsSuccess = '[El Financial Reports] Load El Financial Reports Success',
  loadElFinancialReportsFail = '[El Financial Reports] Load El Financial Reports Fail',
  reset = '[El Financial Reports] Reset',
}

export const loadElFinancialReports = createAction(
  ElFinancialReportsActionTypes.loadElFinancialReports,
);

export const loadElFinancialReportsSuccess = createAction(
  ElFinancialReportsActionTypes.loadElFinancialReportsSuccess,
  props<{ elFinancialReports: ElFinancialReport[] }>(),
);

export const loadElFinancialReportsFail = createAction(
  ElFinancialReportsActionTypes.loadElFinancialReportsFail,
  props<{ error: any }>(),
);

export const reset = createAction(ElFinancialReportsActionTypes.reset);
