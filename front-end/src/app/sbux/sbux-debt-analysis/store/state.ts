import { ApiRequest } from '../../../api';
import { SbuxDebtAnalysis } from '../models';

export interface SbuxDebtAnalysisState {
  debtAnalysis: ApiRequest<SbuxDebtAnalysis[]>;
}

export const sbuxDebtAnalysisInitialState: SbuxDebtAnalysisState = {
  debtAnalysis: { data: [], loading: false, error: null },
};
