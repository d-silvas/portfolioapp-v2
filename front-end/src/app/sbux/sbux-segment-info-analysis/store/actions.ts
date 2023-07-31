import { createAction, props } from '@ngrx/store';
import { SbuxSegmentInfoAnalysis } from '../models';

export enum SbuxSegmentInfoAnalysisActionTypes {
  loadSbuxSegmentInfoAnalysis = '[Sbux Segment Info Analysis] Load Sbux Segment Info Analysis Reports',
  loadSbuxSegmentInfoAnalysisSuccess = '[Sbux Segment Info Analysis Reports] Load Sbux Segment Info Analysis Reports Success',
  loadSbuxSegmentInfoAnalysisFail = '[Sbux Segment Info Analysis Reports] Load Sbux Segment Info Analysis Reports Fail',
  reset = '[Sbux Segment Info Analysis Reports] Reset',
}

export const loadSbuxSegmentInfoAnalysis = createAction(
  SbuxSegmentInfoAnalysisActionTypes.loadSbuxSegmentInfoAnalysis
);

export const loadSbuxSegmentInfoAnalysisSuccess = createAction(
  SbuxSegmentInfoAnalysisActionTypes.loadSbuxSegmentInfoAnalysisSuccess,
  props<{ sbuxSegmentInfoAnalysis: SbuxSegmentInfoAnalysis[] }>()
);

export const loadSbuxSegmentInfoAnalysisFail = createAction(
  SbuxSegmentInfoAnalysisActionTypes.loadSbuxSegmentInfoAnalysisFail,
  props<{ error: any }>()
);

export const reset = createAction(SbuxSegmentInfoAnalysisActionTypes.reset);
