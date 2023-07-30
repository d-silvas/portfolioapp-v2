import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SbuxPlAnalysisTableInfo } from './models';
import { Store, select } from '@ngrx/store';
import { SbuxPlAnalysisRootState } from './store/state';
import * as sbuxPlAnalysisSelectors from './store/selectors';
import * as sbuxPlAnalysisActions from './store/actions';
import { SbuxPlAnalysisTableInfoMapperService } from './services';

@Component({
  selector: 'app-sbux-pl-analysis',
  templateUrl: './sbux-pl-analysis.component.html',
  styleUrls: ['./sbux-pl-analysis.component.scss'],
})
export class SbuxPlAnalysisComponent {
  tableInfo$: Observable<SbuxPlAnalysisTableInfo>;

  constructor(
    private readonly _store: Store<SbuxPlAnalysisRootState>,
    private readonly _sbuxPlAnalysisTableInfoMapperService: SbuxPlAnalysisTableInfoMapperService
  ) {
    this._store.dispatch(sbuxPlAnalysisActions.loadSbuxPlAnalysis());
    this.tableInfo$ = this._store.pipe(
      select(sbuxPlAnalysisSelectors.getSbuxPlAnalysis),
      map((sbuxPlAnalysis) =>
        this._sbuxPlAnalysisTableInfoMapperService.map(sbuxPlAnalysis)
      )
    );
  }
}
