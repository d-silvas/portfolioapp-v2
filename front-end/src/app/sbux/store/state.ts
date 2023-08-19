import { AppState } from '../../store/state';
import { SbuxDebtAnalysisState } from '../sbux-debt-analysis/store/state';
import { SbuxSegmentInfoAnalysisState } from '../sbux-segment-info-analysis/store/state';

export interface SbuxRootState extends AppState {
  sbux: SbuxState;
}

export interface SbuxState {
  segmentInfoAnalysis: SbuxSegmentInfoAnalysisState;
  debtAnalysis: SbuxDebtAnalysisState;
}
