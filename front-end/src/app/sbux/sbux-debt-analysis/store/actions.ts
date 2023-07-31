import { createAction, props } from '@ngrx/store';
import { SbuxDebtAnalysis } from '../models';

export enum SbuxDebtAnalysisActionTypes {
  loadSbuxDebtAnalysis = '[Sbux Debt Analysis] Load Sbux Debt Analysis Reports',
  loadSbuxDebtAnalysisSuccess = '[Sbux Debt Analysis Reports] Load Sbux Debt Analysis Reports Success',
  loadSbuxDebtAnalysisFail = '[Sbux Debt Analysis Reports] Load Sbux Debt Analysis Reports Fail',
  reset = '[Sbux Debt Analysis Reports] Reset',
}

export const loadSbuxDebtAnalysis = createAction(
  SbuxDebtAnalysisActionTypes.loadSbuxDebtAnalysis
);

export const loadSbuxDebtAnalysisSuccess = createAction(
  SbuxDebtAnalysisActionTypes.loadSbuxDebtAnalysisSuccess,
  props<{ sbuxDebtAnalysis: SbuxDebtAnalysis[] }>()
);

export const loadSbuxDebtAnalysisFail = createAction(
  SbuxDebtAnalysisActionTypes.loadSbuxDebtAnalysisFail,
  props<{ error: any }>()
);

export const reset = createAction(SbuxDebtAnalysisActionTypes.reset);
