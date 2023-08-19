import { AppState } from '../../store/state';

export interface ElRootState extends AppState {
  el: ElState;
}

export interface ElState {
  // segmentInfoAnalysis: SbuxSegmentInfoAnalysisState;
}
