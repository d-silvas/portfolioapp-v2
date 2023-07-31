import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SbuxSegmentInfoAnalysisTableInfo } from './models';
import { Store, select } from '@ngrx/store';
import * as sbuxSegmentInfoAnalysisSelectors from './store/selectors';
import * as sbuxSegmentInfoAnalysisActions from './store/actions';
import { SbuxSegmentInfoAnalysisTableInfoMapperService } from './services';
import { SbuxRootState } from '../store/state';

@Component({
  selector: 'app-sbux-segment-info-analysis',
  templateUrl: './sbux-segment-info-analysis.component.html',
  styleUrls: ['./sbux-segment-info-analysis.component.scss'],
})
export class SbuxSegmentInfoAnalysisComponent {
  tableInfo$: Observable<SbuxSegmentInfoAnalysisTableInfo>;

  constructor(
    private readonly _store: Store<SbuxRootState>,
    private readonly _sbuxSegmentInfoAnalysisTableInfoMapperService: SbuxSegmentInfoAnalysisTableInfoMapperService
  ) {
    this._store.dispatch(
      sbuxSegmentInfoAnalysisActions.loadSbuxSegmentInfoAnalysis()
    );
    this.tableInfo$ = this._store.pipe(
      select(sbuxSegmentInfoAnalysisSelectors.getSbuxSegmentInfoAnalysis),
      map((sbuxSegmentInfoAnalysis) =>
        this._sbuxSegmentInfoAnalysisTableInfoMapperService.map(
          sbuxSegmentInfoAnalysis
        )
      )
    );
  }
}
