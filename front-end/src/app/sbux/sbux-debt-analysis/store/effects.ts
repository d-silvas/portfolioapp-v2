import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { SbuxDebtAnalysisService } from '../services';
import * as sbuxDebtAnalysisActions from './actions';
import { SbuxDebtAnalysis } from '../models';

@Injectable()
export class SbuxDebtAnalysisEffects {
  loadTickers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(sbuxDebtAnalysisActions.loadSbuxDebtAnalysis),
      switchMap(() =>
        this._sbuxDebtAnalysisService.getYearlyDebtAnalyses().pipe(
          map((debtAnalyses: SbuxDebtAnalysis[]) =>
            sbuxDebtAnalysisActions.loadSbuxDebtAnalysisSuccess({
              sbuxDebtAnalysis: debtAnalyses,
            })
          )
        )
      )
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _sbuxDebtAnalysisService: SbuxDebtAnalysisService
  ) {}
}
