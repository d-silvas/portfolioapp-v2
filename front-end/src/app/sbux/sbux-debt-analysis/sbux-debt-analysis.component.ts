import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SbuxDebtAnalysisTableInfo } from './models';
import { Store, select } from '@ngrx/store';
import * as sbuxDebtAnalysisSelectors from './store/selectors';
import * as sbuxDebtAnalysisActions from './store/actions';
import { SbuxDebtAnalysisTableInfoMapperService } from './services';
import { SbuxRootState } from '../store/state';

@Component({
  selector: 'app-sbux-debt-analysis',
  templateUrl: './sbux-debt-analysis.component.html',
  styleUrls: ['./sbux-debt-analysis.component.scss'],
})
export class SbuxDebtAnalysisComponent {
  tableInfo$: Observable<SbuxDebtAnalysisTableInfo>;

  constructor(
    private readonly _store: Store<SbuxRootState>,
    private readonly _sbuxDebtAnalysisTableInfoMapperService: SbuxDebtAnalysisTableInfoMapperService
  ) {
    this._store.dispatch(sbuxDebtAnalysisActions.loadSbuxDebtAnalysis());
    this.tableInfo$ = this._store.pipe(
      select(sbuxDebtAnalysisSelectors.getSbuxDebtAnalysis),
      map((sbuxDebtAnalysis) =>
        this._sbuxDebtAnalysisTableInfoMapperService.map(sbuxDebtAnalysis)
      )
    );
  }
}
