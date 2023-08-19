import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../../api';
import { PlAnalysisMapperService } from './pl-analysis-mapper.service';
import { PlAnalysis, PlAnalysisDto } from '../models';

@Injectable({ providedIn: 'root' })
export class PlAnalysisService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _PlAnalysisMapperService: PlAnalysisMapperService,
    private readonly _apiService: ApiService,
  ) {}

  getYearlyPlAnalyses(tickerUrl: string): Observable<PlAnalysis[]> {
    return this._http
      .get<PlAnalysisDto[]>(
        this._apiService.createApiUrl(`/${tickerUrl}/pl-analysis`),
      )
      .pipe(
        map((dtos: PlAnalysisDto[]) =>
          dtos.map((i) => this._PlAnalysisMapperService.map(i)),
        ),
      );
  }
}
