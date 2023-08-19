import { Injectable } from '@angular/core';
import { PlAnalysis, PlAnalysisTableInfo } from '../models';

@Injectable({ providedIn: 'root' })
export class PlAnalysisTableInfoMapperService {
  map(plAnalysis: PlAnalysis[]): PlAnalysisTableInfo {
    const plAnalysisTableInfo: PlAnalysisTableInfo = {
      id: [],
      period: [],
      netRevenue: [],
      netRevenueDelta: [],
      netRevenueCagr5: [],
      netRevenueCagr10: [],
      cogs: [],
      cogsDelta: [],
      cogsAsProportionOfRevenues: [],
      cogsCagr5: [],
      cogsCagr10: [],
      grossProfit: [],
      grossProfitAsProportionOfRevenues: [],
      grossProfitDelta: [],
      grossProfitCagr5: [],
      grossProfitCagr10: [],
      sga: [],
      sgaAsProportionOfRevenues: [],
      sgaDelta: [],
      sgaCagr5: [],
      sgaCagr10: [],
      ebitda: [],
      ebitdaAsProportionOfRevenues: [],
      ebitdaDelta: [],
      ebitdaCagr5: [],
      ebitdaCagr10: [],
      ebit: [],
      ebitAsProportionOfRevenues: [],
      ebitDelta: [],
      ebitCagr5: [],
      ebitCagr10: [],
      ebt: [],
      ebtAsProportionOfRevenues: [],
      ebtDelta: [],
      ebtCagr5: [],
      ebtCagr10: [],
      taxPaid: [],
      taxPaidAsProportionOfEbt: [],
      taxPaidDelta: [],
      taxPaidCagr5: [],
      taxPaidCagr10: [],
      netIncome: [],
      netIncomeAsProportionOfRevenues: [],
      netIncomeDelta: [],
      netIncomeCagr5: [],
      netIncomeCagr10: [],
    };
    for (const [index, singlePlAnalysis] of plAnalysis.entries()) {
      plAnalysisTableInfo.id.push(singlePlAnalysis.id);
      // TODO
      plAnalysisTableInfo.period.push(`FY${singlePlAnalysis.calendarYear}`);
      plAnalysisTableInfo.netRevenue.push(singlePlAnalysis.netRevenue);
      plAnalysisTableInfo.netRevenueDelta.push(
        singlePlAnalysis.netRevenueDelta,
      );
      plAnalysisTableInfo.netRevenueCagr5.push(
        singlePlAnalysis.netRevenueCagr5,
      );
      plAnalysisTableInfo.netRevenueCagr10.push(
        singlePlAnalysis.netRevenueCagr10,
      );
      plAnalysisTableInfo.cogs.push(singlePlAnalysis.cogs);
      plAnalysisTableInfo.cogsDelta.push(singlePlAnalysis.cogsDelta);
      plAnalysisTableInfo.cogsAsProportionOfRevenues.push(
        singlePlAnalysis.cogsAsProportionOfRevenues,
      );
      plAnalysisTableInfo.cogsCagr5.push(singlePlAnalysis.cogsCagr5);
      plAnalysisTableInfo.cogsCagr10.push(singlePlAnalysis.cogsCagr10);
      plAnalysisTableInfo.grossProfit.push(singlePlAnalysis.grossProfit);
      plAnalysisTableInfo.grossProfitAsProportionOfRevenues.push(
        singlePlAnalysis.grossProfitAsProportionOfRevenues,
      );
      plAnalysisTableInfo.grossProfitDelta.push(
        singlePlAnalysis.grossProfitDelta,
      );
      plAnalysisTableInfo.grossProfitCagr5.push(
        singlePlAnalysis.grossProfitCagr5,
      );
      plAnalysisTableInfo.grossProfitCagr10.push(
        singlePlAnalysis.grossProfitCagr10,
      );
      plAnalysisTableInfo.sga.push(singlePlAnalysis.sga);
      plAnalysisTableInfo.sgaAsProportionOfRevenues.push(
        singlePlAnalysis.sgaAsProportionOfRevenues,
      );
      plAnalysisTableInfo.sgaDelta.push(singlePlAnalysis.sgaDelta);
      plAnalysisTableInfo.sgaCagr5.push(singlePlAnalysis.sgaCagr5);
      plAnalysisTableInfo.sgaCagr10.push(singlePlAnalysis.sgaCagr10);
      plAnalysisTableInfo.ebitda.push(singlePlAnalysis.ebitda);
      plAnalysisTableInfo.ebitdaAsProportionOfRevenues.push(
        singlePlAnalysis.ebitdaAsProportionOfRevenues,
      );
      plAnalysisTableInfo.ebitdaDelta.push(singlePlAnalysis.ebitdaDelta);
      plAnalysisTableInfo.ebitdaCagr5.push(singlePlAnalysis.ebitdaCagr5);
      plAnalysisTableInfo.ebitdaCagr10.push(singlePlAnalysis.ebitdaCagr10);
      plAnalysisTableInfo.ebit.push(singlePlAnalysis.ebit);
      plAnalysisTableInfo.ebitAsProportionOfRevenues.push(
        singlePlAnalysis.ebitAsProportionOfRevenues,
      );
      plAnalysisTableInfo.ebitDelta.push(singlePlAnalysis.ebitDelta);
      plAnalysisTableInfo.ebitCagr5.push(singlePlAnalysis.ebitCagr5);
      plAnalysisTableInfo.ebitCagr10.push(singlePlAnalysis.ebitCagr10);
      plAnalysisTableInfo.ebt.push(singlePlAnalysis.ebt);
      plAnalysisTableInfo.ebtAsProportionOfRevenues.push(
        singlePlAnalysis.ebtAsProportionOfRevenues,
      );
      plAnalysisTableInfo.ebtDelta.push(singlePlAnalysis.ebtDelta);
      plAnalysisTableInfo.ebtCagr5.push(singlePlAnalysis.ebtCagr5);
      plAnalysisTableInfo.ebtCagr10.push(singlePlAnalysis.ebtCagr10);
      plAnalysisTableInfo.taxPaid.push(singlePlAnalysis.taxPaid);
      plAnalysisTableInfo.taxPaidAsProportionOfEbt.push(
        singlePlAnalysis.taxPaidAsProportionOfEbt,
      );
      plAnalysisTableInfo.taxPaidDelta.push(singlePlAnalysis.taxPaidDelta);
      plAnalysisTableInfo.taxPaidCagr5.push(singlePlAnalysis.taxPaidCagr5);
      plAnalysisTableInfo.taxPaidCagr10.push(singlePlAnalysis.taxPaidCagr10);
      plAnalysisTableInfo.netIncome.push(singlePlAnalysis.netIncome);
      plAnalysisTableInfo.netIncomeAsProportionOfRevenues.push(
        singlePlAnalysis.netIncomeAsProportionOfRevenues,
      );
      plAnalysisTableInfo.netIncomeDelta.push(singlePlAnalysis.netIncomeDelta);
      plAnalysisTableInfo.netIncomeCagr5.push(singlePlAnalysis.netIncomeCagr5);
      plAnalysisTableInfo.netIncomeCagr10.push(
        singlePlAnalysis.netIncomeCagr10,
      );
    }
    return plAnalysisTableInfo;
  }
}
