import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../../../api';
import { SbuxDebtAnalysisMapperService } from './sbux-debt-analysis-mapper.service';
import { SbuxDebtAnalysis, SbuxDebtAnalysisDto } from '../models';

@Injectable({ providedIn: 'root' })
export class SbuxDebtAnalysisService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _sbuxDebtAnalysisMapperService: SbuxDebtAnalysisMapperService,
    private readonly _apiService: ApiService
  ) {}

  getYearlyDebtAnalyses(): Observable<SbuxDebtAnalysis[]> {
    return this._http
      .get<SbuxDebtAnalysisDto[]>(
        this._apiService.createApiUrl(`/sbux/debt-analysis`)
      )
      .pipe(
        map((dtos: SbuxDebtAnalysisDto[]) =>
          dtos.map((i) => this._sbuxDebtAnalysisMapperService.map(i))
        )
      );
  }
}
