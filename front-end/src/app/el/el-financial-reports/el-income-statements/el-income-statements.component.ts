import { Component, OnInit } from '@angular/core';
import type { ElFinancialReport } from '../models';
import { Store, select } from '@ngrx/store';
import type { ElRootState } from '../../store/state';
import * as elFinancialReportsSelectors from '../store/selectors';
import * as elFinancialReportsActions from '../store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-el-income-statements',
  templateUrl: './el-income-statements.component.html',
  styles: ['.el-income-statements { padding: 12px; }'],
})
export class ElIncomeStatementsComponent implements OnInit {
  elFinancialReports$: Observable<ElFinancialReport[]>;

  constructor(private readonly _store: Store<ElRootState>) {
    this.elFinancialReports$ = this._store.pipe(
      select(elFinancialReportsSelectors.getElFinancialReports),
    );
    this.elFinancialReports$.subscribe((f) => console.log(f));
  }

  ngOnInit() {
    this._store.dispatch(elFinancialReportsActions.loadElFinancialReports());
  }
}
