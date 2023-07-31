import { ApiRequest } from '../../../api';
import { SbuxPlAnalysis } from '../models';

export interface SbuxPlAnalysisState {
  plAnalysis: ApiRequest<SbuxPlAnalysis[]>;
}

export const sbuxPlAnalysisInitialState: SbuxPlAnalysisState = {
  plAnalysis: { data: [], loading: false, error: null },
};
