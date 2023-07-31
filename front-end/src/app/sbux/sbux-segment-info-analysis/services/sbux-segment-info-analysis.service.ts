import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../../../api';
import { SbuxSegmentInfoAnalysisMapperService } from './sbux-segment-info-analysis-mapper.service';
import { SbuxSegmentInfoAnalysis, SbuxSegmentInfoAnalysisDto } from '../models';

@Injectable({ providedIn: 'root' })
export class SbuxSegmentInfoAnalysisService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _sbuxSegmentInfoAnalysisMapperService: SbuxSegmentInfoAnalysisMapperService,
    private readonly _apiService: ApiService
  ) {}

  getYearlySegmentInfoAnalyses(): Observable<SbuxSegmentInfoAnalysis[]> {
    return this._http
      .get<SbuxSegmentInfoAnalysisDto[]>(
        this._apiService.createApiUrl(`/sbux/segment-info-analysis`)
      )
      .pipe(
        map((dtos: SbuxSegmentInfoAnalysisDto[]) =>
          dtos.map((i) => this._sbuxSegmentInfoAnalysisMapperService.map(i))
        )
      );
  }
}
