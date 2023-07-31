import { ApiRequest } from '../../../api';
import { SbuxSegmentInfoAnalysis } from '../models';

export interface SbuxSegmentInfoAnalysisState {
  segmentInfoAnalysis: ApiRequest<SbuxSegmentInfoAnalysis[]>;
}

export const sbuxSegmentInfoAnalysisInitialState: SbuxSegmentInfoAnalysisState =
  {
    segmentInfoAnalysis: { data: [], loading: false, error: null },
  };
