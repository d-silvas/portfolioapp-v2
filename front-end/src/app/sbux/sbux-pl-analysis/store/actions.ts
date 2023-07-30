import { createAction, props } from '@ngrx/store';
import { SbuxPlAnalysis } from '../models';

export enum SbuxPlAnalysisActionTypes {
  loadSbuxPlAnalysis = '[Sbux Pl Analysis] Load Sbux Pl Analysis Reports',
  loadSbuxPlAnalysisSuccess = '[Sbux Pl Analysis Reports] Load Sbux Pl Analysis Reports Success',
  loadSbuxPlAnalysisFail = '[Sbux Pl Analysis Reports] Load Sbux Pl Analysis Reports Fail',
  reset = '[Sbux Pl Analysis Reports] Reset',
}

export const loadSbuxPlAnalysis = createAction(
  SbuxPlAnalysisActionTypes.loadSbuxPlAnalysis
);

export const loadSbuxPlAnalysisSuccess = createAction(
  SbuxPlAnalysisActionTypes.loadSbuxPlAnalysisSuccess,
  props<{ sbuxPlAnalysis: SbuxPlAnalysis[] }>()
);

export const loadSbuxPlAnalysisFail = createAction(
  SbuxPlAnalysisActionTypes.loadSbuxPlAnalysisFail,
  props<{ error: any }>()
);

export const reset = createAction(SbuxPlAnalysisActionTypes.reset);
