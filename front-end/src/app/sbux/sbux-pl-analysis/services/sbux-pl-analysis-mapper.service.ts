import { Injectable } from '@angular/core';
import { SbuxPlAnalysis, SbuxPlAnalysisDto } from '../models';

@Injectable({ providedIn: 'root' })
export class SbuxPlAnalysisMapperService {
  map(sbuxPlAnalysisDto: SbuxPlAnalysisDto): SbuxPlAnalysis {
    return {
      id: sbuxPlAnalysisDto.id,
      period: sbuxPlAnalysisDto.period,
      calendarYear: sbuxPlAnalysisDto.calendarYear,
      netRevenue: sbuxPlAnalysisDto.netRevenue,
      netRevenueDelta: sbuxPlAnalysisDto.netRevenueDelta,
      netRevenueCagr5: sbuxPlAnalysisDto.netRevenueCagr5,
      netRevenueCagr10: sbuxPlAnalysisDto.netRevenueCagr10,
      cogs: sbuxPlAnalysisDto.cogs,
      cogsDelta: sbuxPlAnalysisDto.cogsDelta,
      cogsAsProportionOfRevenues: sbuxPlAnalysisDto.cogsAsProportionOfRevenues,
      cogsCagr5: sbuxPlAnalysisDto.cogsCagr5,
      cogsCagr10: sbuxPlAnalysisDto.cogsCagr10,
      grossProfit: sbuxPlAnalysisDto.grossProfit,
      grossProfitAsProportionOfRevenues:
        sbuxPlAnalysisDto.grossProfitAsProportionOfRevenues,
      grossProfitDelta: sbuxPlAnalysisDto.grossProfitDelta,
      grossProfitCagr5: sbuxPlAnalysisDto.grossProfitCagr5,
      grossProfitCagr10: sbuxPlAnalysisDto.grossProfitCagr10,
      sga: sbuxPlAnalysisDto.sga,
      sgaAsProportionOfRevenues: sbuxPlAnalysisDto.sgaAsProportionOfRevenues,
      sgaDelta: sbuxPlAnalysisDto.sgaDelta,
      sgaCagr5: sbuxPlAnalysisDto.sgaCagr5,
      sgaCagr10: sbuxPlAnalysisDto.sgaCagr10,
      ebitda: sbuxPlAnalysisDto.ebitda,
      ebitdaAsProportionOfRevenues:
        sbuxPlAnalysisDto.ebitdaAsProportionOfRevenues,
      ebitdaDelta: sbuxPlAnalysisDto.ebitdaDelta,
      ebitdaCagr5: sbuxPlAnalysisDto.ebitdaCagr5,
      ebitdaCagr10: sbuxPlAnalysisDto.ebitdaCagr10,
      ebit: sbuxPlAnalysisDto.ebit,
      ebitAsProportionOfRevenues: sbuxPlAnalysisDto.ebitAsProportionOfRevenues,
      ebitDelta: sbuxPlAnalysisDto.ebitDelta,
      ebitCagr5: sbuxPlAnalysisDto.ebitCagr5,
      ebitCagr10: sbuxPlAnalysisDto.ebitCagr10,
      ebt: sbuxPlAnalysisDto.ebt,
      ebtAsProportionOfRevenues: sbuxPlAnalysisDto.ebtAsProportionOfRevenues,
      ebtDelta: sbuxPlAnalysisDto.ebtDelta,
      ebtCagr5: sbuxPlAnalysisDto.ebtCagr5,
      ebtCagr10: sbuxPlAnalysisDto.ebtCagr10,
      taxPaid: sbuxPlAnalysisDto.taxPaid,
      taxPaidAsProportionOfEbt: sbuxPlAnalysisDto.taxPaidAsProportionOfEbt,
      taxPaidDelta: sbuxPlAnalysisDto.taxPaidDelta,
      taxPaidCagr5: sbuxPlAnalysisDto.taxPaidCagr5,
      taxPaidCagr10: sbuxPlAnalysisDto.taxPaidCagr10,
      netIncome: sbuxPlAnalysisDto.netIncome,
      netIncomeAsProportionOfRevenues:
        sbuxPlAnalysisDto.netIncomeAsProportionOfRevenues,
      netIncomeDelta: sbuxPlAnalysisDto.netIncomeDelta,
      netIncomeCagr5: sbuxPlAnalysisDto.netIncomeCagr5,
      netIncomeCagr10: sbuxPlAnalysisDto.netIncomeCagr10,
    };
  }
}
