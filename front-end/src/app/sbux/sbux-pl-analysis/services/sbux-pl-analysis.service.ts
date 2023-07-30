import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../../../api';
import { SbuxPlAnalysisMapperService } from './sbux-pl-analysis-mapper.service';
import { SbuxPlAnalysis, SbuxPlAnalysisDto } from '../models';

@Injectable({ providedIn: 'root' })
export class SbuxPlAnalysisService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _sbuxPlAnalysisMapperService: SbuxPlAnalysisMapperService,
    private readonly _apiService: ApiService
  ) {}

  getYearlyPlAnalyses(): Observable<SbuxPlAnalysis[]> {
    return this._http
      .get<SbuxPlAnalysisDto[]>(
        this._apiService.createApiUrl(`/sbux/pl-analysis`)
      )
      .pipe(
        map((dtos: SbuxPlAnalysisDto[]) =>
          dtos.map((i) => this._sbuxPlAnalysisMapperService.map(i))
        )
      );
  }
}
