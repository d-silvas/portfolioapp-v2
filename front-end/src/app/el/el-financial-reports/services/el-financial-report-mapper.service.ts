import { Injectable } from '@angular/core';
import type { ElFinancialReport, ElFinancialReportDto } from '../models';
import { ElIncomeStatementMapperService } from './el-income-statement-mapper.service';

@Injectable({ providedIn: 'root' })
export class ElFinancialReportMapperService {
  constructor(
    private readonly _elIncomeStatementMapperService: ElIncomeStatementMapperService,
  ) {}

  map(elFinancialReportDto: ElFinancialReportDto): ElFinancialReport {
    return {
      id: elFinancialReportDto.id,
      period: elFinancialReportDto.period,
      calendarYear: elFinancialReportDto.calendarYear,
      endDate: elFinancialReportDto.endDate,
      publicationDate: elFinancialReportDto.publicationDate,
      incomeStatement: this._elIncomeStatementMapperService.map(
        elFinancialReportDto.incomeStatement,
      ),
    };
  }
}
