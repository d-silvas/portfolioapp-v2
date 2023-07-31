import { AppState } from '../../store/state';
import { SbuxPlAnalysisState } from '../sbux-pl-analysis/store/state';
import { SbuxSegmentInfoAnalysisState } from '../sbux-segment-info-analysis/store/state';

export interface SbuxRootState extends AppState {
  sbux: SbuxState;
}

export interface SbuxState {
  plAnalysis: SbuxPlAnalysisState;
  segmentInfoAnalysis: SbuxSegmentInfoAnalysisState;
}
