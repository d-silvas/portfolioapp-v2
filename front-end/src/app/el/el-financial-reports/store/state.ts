import type { ApiRequest } from '../../../api';
import type { ElFinancialReport } from '../models';

export interface ElFinancialReportsState {
  financialReports: ApiRequest<ElFinancialReport[]>;
}

export const elFinancialReportsInitialState: ElFinancialReportsState = {
  financialReports: { data: [], loading: false, error: null },
};
