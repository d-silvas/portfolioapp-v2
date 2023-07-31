import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { SbuxSegmentInfoAnalysisService } from '../services';
import * as sbuxSegmentInfoAnalysisActions from './actions';
import { SbuxSegmentInfoAnalysis } from '../models';

@Injectable()
export class SbuxSegmentInfoAnalysisEffects {
  loadTickers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(sbuxSegmentInfoAnalysisActions.loadSbuxSegmentInfoAnalysis),
      switchMap(() =>
        this._sbuxSegmentInfoAnalysisService
          .getYearlySegmentInfoAnalyses()
          .pipe(
            map((segmentinfoAnalyses: SbuxSegmentInfoAnalysis[]) =>
              sbuxSegmentInfoAnalysisActions.loadSbuxSegmentInfoAnalysisSuccess(
                {
                  sbuxSegmentInfoAnalysis: segmentinfoAnalyses,
                }
              )
            )
          )
      )
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _sbuxSegmentInfoAnalysisService: SbuxSegmentInfoAnalysisService
  ) {}
}
