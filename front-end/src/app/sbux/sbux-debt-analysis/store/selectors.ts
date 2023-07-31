import { createSelector } from '@ngrx/store';

import { SbuxDebtAnalysisState } from './state';
import { getSbuxDebtAnalysisState } from '../../store/selectors';

export const getSbuxDebtAnalysis = createSelector(
  getSbuxDebtAnalysisState,
  (state: SbuxDebtAnalysisState) => state.debtAnalysis.data
);
