import { Component, Input } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PlAnalysisTableInfo } from './models';
import { Store, select } from '@ngrx/store';
import * as plAnalysisSelectors from './store/selectors';
import * as plAnalysisActions from './store/actions';
import { PlAnalysisTableInfoMapperService } from './services';
import { PlAnalysisRootState } from './store/state';

@Component({
  selector: 'app-pl-analysis',
  templateUrl: './pl-analysis.component.html',
  styleUrls: ['./pl-analysis.component.scss'],
})
export class PlAnalysisComponent {
  tableInfo$: Observable<PlAnalysisTableInfo>;

  @Input() set tickerUrl(tickerUrl: string) {
    this._store.dispatch(plAnalysisActions.loadPlAnalysis({ tickerUrl }));
  }

  constructor(
    private readonly _store: Store<PlAnalysisRootState>,
    private readonly _plAnalysisTableInfoMapperService: PlAnalysisTableInfoMapperService,
  ) {
    this.tableInfo$ = this._store.pipe(
      select(plAnalysisSelectors.getPlAnalysisList),
      map((plAnalysisList) =>
        this._plAnalysisTableInfoMapperService.map(plAnalysisList),
      ),
    );
  }
}
