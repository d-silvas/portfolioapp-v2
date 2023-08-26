import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { ElFinancialReportsService } from '../services';
import * as elFinancialReportsActions from './actions';
import type { ElFinancialReport } from '../models';

@Injectable()
export class ElFinancialReportsEffects {
  loadTickers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(elFinancialReportsActions.loadElFinancialReports),
      switchMap(() =>
        this._elFinancialReportsService.getFinancialReports().pipe(
          map((elFinancialReports: ElFinancialReport[]) =>
            elFinancialReportsActions.loadElFinancialReportsSuccess({
              elFinancialReports,
            }),
          ),
        ),
      ),
    ),
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _elFinancialReportsService: ElFinancialReportsService,
  ) {}
}
