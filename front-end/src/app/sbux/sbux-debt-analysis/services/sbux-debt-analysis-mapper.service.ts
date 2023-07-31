import { Injectable } from '@angular/core';
import { SbuxDebtAnalysis, SbuxDebtAnalysisDto } from '../models';

@Injectable({ providedIn: 'root' })
export class SbuxDebtAnalysisMapperService {
  map(sbuxDebtAnalysisDto: SbuxDebtAnalysisDto): SbuxDebtAnalysis {
    return {
      id: sbuxDebtAnalysisDto.id,
      period: sbuxDebtAnalysisDto.period,
      calendarYear: sbuxDebtAnalysisDto.calendarYear,
      netRevenue: sbuxDebtAnalysisDto.netRevenue,
      netRevenueDelta: sbuxDebtAnalysisDto.netRevenueDelta,
      netRevenueCagr5: sbuxDebtAnalysisDto.netRevenueCagr5,
      netRevenueCagr10: sbuxDebtAnalysisDto.netRevenueCagr10,
      cogs: sbuxDebtAnalysisDto.cogs,
      cogsDelta: sbuxDebtAnalysisDto.cogsDelta,
      cogsAsProportionOfRevenues:
        sbuxDebtAnalysisDto.cogsAsProportionOfRevenues,
      cogsCagr5: sbuxDebtAnalysisDto.cogsCagr5,
      cogsCagr10: sbuxDebtAnalysisDto.cogsCagr10,
      grossProfit: sbuxDebtAnalysisDto.grossProfit,
      grossProfitAsProportionOfRevenues:
        sbuxDebtAnalysisDto.grossProfitAsProportionOfRevenues,
      grossProfitDelta: sbuxDebtAnalysisDto.grossProfitDelta,
      grossProfitCagr5: sbuxDebtAnalysisDto.grossProfitCagr5,
      grossProfitCagr10: sbuxDebtAnalysisDto.grossProfitCagr10,
      sga: sbuxDebtAnalysisDto.sga,
      sgaAsProportionOfRevenues: sbuxDebtAnalysisDto.sgaAsProportionOfRevenues,
      sgaDelta: sbuxDebtAnalysisDto.sgaDelta,
      sgaCagr5: sbuxDebtAnalysisDto.sgaCagr5,
      sgaCagr10: sbuxDebtAnalysisDto.sgaCagr10,
      ebitda: sbuxDebtAnalysisDto.ebitda,
      ebitdaAsProportionOfRevenues:
        sbuxDebtAnalysisDto.ebitdaAsProportionOfRevenues,
      ebitdaDelta: sbuxDebtAnalysisDto.ebitdaDelta,
      ebitdaCagr5: sbuxDebtAnalysisDto.ebitdaCagr5,
      ebitdaCagr10: sbuxDebtAnalysisDto.ebitdaCagr10,
      ebit: sbuxDebtAnalysisDto.ebit,
      ebitAsProportionOfRevenues:
        sbuxDebtAnalysisDto.ebitAsProportionOfRevenues,
      ebitDelta: sbuxDebtAnalysisDto.ebitDelta,
      ebitCagr5: sbuxDebtAnalysisDto.ebitCagr5,
      ebitCagr10: sbuxDebtAnalysisDto.ebitCagr10,
      ebt: sbuxDebtAnalysisDto.ebt,
      ebtAsProportionOfRevenues: sbuxDebtAnalysisDto.ebtAsProportionOfRevenues,
      ebtDelta: sbuxDebtAnalysisDto.ebtDelta,
      ebtCagr5: sbuxDebtAnalysisDto.ebtCagr5,
      ebtCagr10: sbuxDebtAnalysisDto.ebtCagr10,
      taxPaid: sbuxDebtAnalysisDto.taxPaid,
      taxPaidAsProportionOfEbt: sbuxDebtAnalysisDto.taxPaidAsProportionOfEbt,
      taxPaidDelta: sbuxDebtAnalysisDto.taxPaidDelta,
      taxPaidCagr5: sbuxDebtAnalysisDto.taxPaidCagr5,
      taxPaidCagr10: sbuxDebtAnalysisDto.taxPaidCagr10,
      netIncome: sbuxDebtAnalysisDto.netIncome,
      netIncomeAsProportionOfRevenues:
        sbuxDebtAnalysisDto.netIncomeAsProportionOfRevenues,
      netIncomeDelta: sbuxDebtAnalysisDto.netIncomeDelta,
      netIncomeCagr5: sbuxDebtAnalysisDto.netIncomeCagr5,
      netIncomeCagr10: sbuxDebtAnalysisDto.netIncomeCagr10,
    };
  }
}
