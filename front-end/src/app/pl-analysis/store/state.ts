import { AppState } from '../../store/state';
import { ApiRequest } from '../../api';
import { PlAnalysis } from '../models';

export interface PlAnalysisRootState extends AppState {
  plAnalysis: PlAnalysisState;
}

export interface PlAnalysisState {
  plAnalysisList: ApiRequest<PlAnalysis[]>;
}

export const plAnalysisInitialState: PlAnalysisState = {
  plAnalysisList: { data: [], loading: false, error: null },
};
