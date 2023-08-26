import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ApiService } from '../../../api';
import { ElFinancialReportMapperService } from './el-financial-report-mapper.service';
import type { ElFinancialReport, ElFinancialReportDto } from '../models';

@Injectable({ providedIn: 'root' })
export class ElFinancialReportsService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _elFinancialReportMapperService: ElFinancialReportMapperService,
    private readonly _apiService: ApiService,
  ) {}

  getFinancialReports(): Observable<ElFinancialReport[]> {
    return this._http
      .get<ElFinancialReportDto[]>(
        this._apiService.createApiUrl(`/el/financial-reports`),
      )
      .pipe(
        map((dtos: ElFinancialReportDto[]) =>
          dtos.map((i) => this._elFinancialReportMapperService.map(i)),
        ),
        catchError((e) => {
          console.error(e);
          return of(null);
        }),
      );
  }
}
