import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { PlAnalysisService } from '../services';
import * as plAnalysisActions from './actions';
import { PlAnalysis } from '../models';

@Injectable()
export class PlAnalysisEffects {
  loadTickers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(plAnalysisActions.loadPlAnalysis),
      switchMap(({ tickerUrl }) =>
        this._plAnalysisService.getYearlyPlAnalyses(tickerUrl).pipe(
          map((plAnalyses: PlAnalysis[]) =>
            plAnalysisActions.loadPlAnalysisSuccess({
              plAnalysisList: plAnalyses,
            }),
          ),
        ),
      ),
    ),
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _plAnalysisService: PlAnalysisService,
  ) {}
}
