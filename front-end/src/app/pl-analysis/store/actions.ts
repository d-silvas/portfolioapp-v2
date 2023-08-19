import { createAction, props } from '@ngrx/store';
import { PlAnalysis } from '../models';

export enum PlAnalysisActionTypes {
  loadPlAnalysisList = '[Pl Analysis] Load Pl Analysis List',
  loadPlAnalysisListSuccess = '[Pl Analysis Reports] Load Pl Analysis List Success',
  loadPlAnalysisListFail = '[Pl Analysis Reports] Load Pl Analysis List Fail',
  reset = '[Pl Analysis Reports] Reset',
}

export const loadPlAnalysis = createAction(
  PlAnalysisActionTypes.loadPlAnalysisList,
  props<{ tickerUrl: string }>(),
);

export const loadPlAnalysisSuccess = createAction(
  PlAnalysisActionTypes.loadPlAnalysisListSuccess,
  props<{ plAnalysisList: PlAnalysis[] }>(),
);

export const loadPlAnalysisFail = createAction(
  PlAnalysisActionTypes.loadPlAnalysisListFail,
  props<{ error: any }>(),
);

export const reset = createAction(PlAnalysisActionTypes.reset);
