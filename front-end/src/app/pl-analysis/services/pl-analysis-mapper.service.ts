import { Injectable } from '@angular/core';
import { PlAnalysis, PlAnalysisDto } from '../models';

@Injectable({ providedIn: 'root' })
export class PlAnalysisMapperService {
  map(plAnalysisDto: PlAnalysisDto): PlAnalysis {
    return {
      id: plAnalysisDto.id,
      period: plAnalysisDto.period,
      calendarYear: plAnalysisDto.calendarYear,
      netRevenue: plAnalysisDto.netRevenue,
      netRevenueDelta: plAnalysisDto.netRevenueDelta,
      netRevenueCagr5: plAnalysisDto.netRevenueCagr5,
      netRevenueCagr10: plAnalysisDto.netRevenueCagr10,
      cogs: plAnalysisDto.cogs,
      cogsDelta: plAnalysisDto.cogsDelta,
      cogsAsProportionOfRevenues: plAnalysisDto.cogsAsProportionOfRevenues,
      cogsCagr5: plAnalysisDto.cogsCagr5,
      cogsCagr10: plAnalysisDto.cogsCagr10,
      grossProfit: plAnalysisDto.grossProfit,
      grossProfitAsProportionOfRevenues:
        plAnalysisDto.grossProfitAsProportionOfRevenues,
      grossProfitDelta: plAnalysisDto.grossProfitDelta,
      grossProfitCagr5: plAnalysisDto.grossProfitCagr5,
      grossProfitCagr10: plAnalysisDto.grossProfitCagr10,
      sga: plAnalysisDto.sga,
      sgaAsProportionOfRevenues: plAnalysisDto.sgaAsProportionOfRevenues,
      sgaDelta: plAnalysisDto.sgaDelta,
      sgaCagr5: plAnalysisDto.sgaCagr5,
      sgaCagr10: plAnalysisDto.sgaCagr10,
      ebitda: plAnalysisDto.ebitda,
      ebitdaAsProportionOfRevenues: plAnalysisDto.ebitdaAsProportionOfRevenues,
      ebitdaDelta: plAnalysisDto.ebitdaDelta,
      ebitdaCagr5: plAnalysisDto.ebitdaCagr5,
      ebitdaCagr10: plAnalysisDto.ebitdaCagr10,
      ebit: plAnalysisDto.ebit,
      ebitAsProportionOfRevenues: plAnalysisDto.ebitAsProportionOfRevenues,
      ebitDelta: plAnalysisDto.ebitDelta,
      ebitCagr5: plAnalysisDto.ebitCagr5,
      ebitCagr10: plAnalysisDto.ebitCagr10,
      ebt: plAnalysisDto.ebt,
      ebtAsProportionOfRevenues: plAnalysisDto.ebtAsProportionOfRevenues,
      ebtDelta: plAnalysisDto.ebtDelta,
      ebtCagr5: plAnalysisDto.ebtCagr5,
      ebtCagr10: plAnalysisDto.ebtCagr10,
      taxPaid: plAnalysisDto.taxPaid,
      taxPaidAsProportionOfEbt: plAnalysisDto.taxPaidAsProportionOfEbt,
      taxPaidDelta: plAnalysisDto.taxPaidDelta,
      taxPaidCagr5: plAnalysisDto.taxPaidCagr5,
      taxPaidCagr10: plAnalysisDto.taxPaidCagr10,
      netIncome: plAnalysisDto.netIncome,
      netIncomeAsProportionOfRevenues:
        plAnalysisDto.netIncomeAsProportionOfRevenues,
      netIncomeDelta: plAnalysisDto.netIncomeDelta,
      netIncomeCagr5: plAnalysisDto.netIncomeCagr5,
      netIncomeCagr10: plAnalysisDto.netIncomeCagr10,
      dilutedEps: plAnalysisDto.dilutedEps,
      dilutedEpsDelta: plAnalysisDto.dilutedEpsDelta,
      dilutedEpsCagr5: plAnalysisDto.dilutedEpsCagr5,
      dilutedEpsCagr10: plAnalysisDto.dilutedEpsCagr10,
    };
  }
}
