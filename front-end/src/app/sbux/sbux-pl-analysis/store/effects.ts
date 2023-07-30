import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { SbuxPlAnalysisService } from '../services';
import * as sbuxPlAnalysisActions from './actions';
import { SbuxPlAnalysis } from '../models';

@Injectable()
export class SbuxPlAnalysisEffects {
  loadTickers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(sbuxPlAnalysisActions.loadSbuxPlAnalysis),
      switchMap(() =>
        this._sbuxPlAnalysisService.getYearlyPlAnalyses().pipe(
          map((plAnalyses: SbuxPlAnalysis[]) =>
            sbuxPlAnalysisActions.loadSbuxPlAnalysisSuccess({
              sbuxPlAnalysis: plAnalyses,
            })
          )
        )
      )
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _sbuxPlAnalysisService: SbuxPlAnalysisService
  ) {}
}
