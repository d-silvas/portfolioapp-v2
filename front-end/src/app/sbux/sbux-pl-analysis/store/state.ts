import { AppState } from '../../../store/state';
import { ApiRequest } from '../../../api';
import { SbuxPlAnalysis } from '../models';

export interface SbuxPlAnalysisRootState extends AppState {
  sbuxPlAnalysis: SbuxPlAnalysisState;
}

export interface SbuxPlAnalysisState {
  plAnalysis: ApiRequest<SbuxPlAnalysis[]>;
}

export const sbuxPlAnalysisInitialState: SbuxPlAnalysisState = {
  plAnalysis: { data: [], loading: false, error: null },
};
