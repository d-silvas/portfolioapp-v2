import { Injectable } from '@angular/core';
import { SbuxPlAnalysis, SbuxPlAnalysisTableInfo } from '../models';

@Injectable({ providedIn: 'root' })
export class SbuxPlAnalysisTableInfoMapperService {
  map(plAnalysis: SbuxPlAnalysis[]): SbuxPlAnalysisTableInfo {
    const sbuxPlAnalysisTableInfo: SbuxPlAnalysisTableInfo = {
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
      sbuxPlAnalysisTableInfo.id.push(singlePlAnalysis.id);
      // TODO
      sbuxPlAnalysisTableInfo.period.push(`FY${singlePlAnalysis.calendarYear}`);
      sbuxPlAnalysisTableInfo.netRevenue.push(singlePlAnalysis.netRevenue);
      sbuxPlAnalysisTableInfo.netRevenueDelta.push(
        singlePlAnalysis.netRevenueDelta
      );
      sbuxPlAnalysisTableInfo.netRevenueCagr5.push(
        singlePlAnalysis.netRevenueCagr5
      );
      sbuxPlAnalysisTableInfo.netRevenueCagr10.push(
        singlePlAnalysis.netRevenueCagr10
      );
      sbuxPlAnalysisTableInfo.cogs.push(singlePlAnalysis.cogs);
      sbuxPlAnalysisTableInfo.cogsDelta.push(singlePlAnalysis.cogsDelta);
      sbuxPlAnalysisTableInfo.cogsAsProportionOfRevenues.push(
        singlePlAnalysis.cogsAsProportionOfRevenues
      );
      sbuxPlAnalysisTableInfo.cogsCagr5.push(singlePlAnalysis.cogsCagr5);
      sbuxPlAnalysisTableInfo.cogsCagr10.push(singlePlAnalysis.cogsCagr10);
      sbuxPlAnalysisTableInfo.grossProfit.push(singlePlAnalysis.grossProfit);
      sbuxPlAnalysisTableInfo.grossProfitAsProportionOfRevenues.push(
        singlePlAnalysis.grossProfitAsProportionOfRevenues
      );
      sbuxPlAnalysisTableInfo.grossProfitDelta.push(
        singlePlAnalysis.grossProfitDelta
      );
      sbuxPlAnalysisTableInfo.grossProfitCagr5.push(
        singlePlAnalysis.grossProfitCagr5
      );
      sbuxPlAnalysisTableInfo.grossProfitCagr10.push(
        singlePlAnalysis.grossProfitCagr10
      );
      sbuxPlAnalysisTableInfo.sga.push(singlePlAnalysis.sga);
      sbuxPlAnalysisTableInfo.sgaAsProportionOfRevenues.push(
        singlePlAnalysis.sgaAsProportionOfRevenues
      );
      sbuxPlAnalysisTableInfo.sgaDelta.push(singlePlAnalysis.sgaDelta);
      sbuxPlAnalysisTableInfo.sgaCagr5.push(singlePlAnalysis.sgaCagr5);
      sbuxPlAnalysisTableInfo.sgaCagr10.push(singlePlAnalysis.sgaCagr10);
      sbuxPlAnalysisTableInfo.ebitda.push(singlePlAnalysis.ebitda);
      sbuxPlAnalysisTableInfo.ebitdaAsProportionOfRevenues.push(
        singlePlAnalysis.ebitdaAsProportionOfRevenues
      );
      sbuxPlAnalysisTableInfo.ebitdaDelta.push(singlePlAnalysis.ebitdaDelta);
      sbuxPlAnalysisTableInfo.ebitdaCagr5.push(singlePlAnalysis.ebitdaCagr5);
      sbuxPlAnalysisTableInfo.ebitdaCagr10.push(singlePlAnalysis.ebitdaCagr10);
      sbuxPlAnalysisTableInfo.ebit.push(singlePlAnalysis.ebit);
      sbuxPlAnalysisTableInfo.ebitAsProportionOfRevenues.push(
        singlePlAnalysis.ebitAsProportionOfRevenues
      );
      sbuxPlAnalysisTableInfo.ebitDelta.push(singlePlAnalysis.ebitDelta);
      sbuxPlAnalysisTableInfo.ebitCagr5.push(singlePlAnalysis.ebitCagr5);
      sbuxPlAnalysisTableInfo.ebitCagr10.push(singlePlAnalysis.ebitCagr10);
      sbuxPlAnalysisTableInfo.ebt.push(singlePlAnalysis.ebt);
      sbuxPlAnalysisTableInfo.ebtAsProportionOfRevenues.push(
        singlePlAnalysis.ebtAsProportionOfRevenues
      );
      sbuxPlAnalysisTableInfo.ebtDelta.push(singlePlAnalysis.ebtDelta);
      sbuxPlAnalysisTableInfo.ebtCagr5.push(singlePlAnalysis.ebtCagr5);
      sbuxPlAnalysisTableInfo.ebtCagr10.push(singlePlAnalysis.ebtCagr10);
      sbuxPlAnalysisTableInfo.taxPaid.push(singlePlAnalysis.taxPaid);
      sbuxPlAnalysisTableInfo.taxPaidAsProportionOfEbt.push(
        singlePlAnalysis.taxPaidAsProportionOfEbt
      );
      sbuxPlAnalysisTableInfo.taxPaidDelta.push(singlePlAnalysis.taxPaidDelta);
      sbuxPlAnalysisTableInfo.taxPaidCagr5.push(singlePlAnalysis.taxPaidCagr5);
      sbuxPlAnalysisTableInfo.taxPaidCagr10.push(
        singlePlAnalysis.taxPaidCagr10
      );
      sbuxPlAnalysisTableInfo.netIncome.push(singlePlAnalysis.netIncome);
      sbuxPlAnalysisTableInfo.netIncomeAsProportionOfRevenues.push(
        singlePlAnalysis.netIncomeAsProportionOfRevenues
      );
      sbuxPlAnalysisTableInfo.netIncomeDelta.push(
        singlePlAnalysis.netIncomeDelta
      );
      sbuxPlAnalysisTableInfo.netIncomeCagr5.push(
        singlePlAnalysis.netIncomeCagr5
      );
      sbuxPlAnalysisTableInfo.netIncomeCagr10.push(
        singlePlAnalysis.netIncomeCagr10
      );
    }
    return sbuxPlAnalysisTableInfo;
  }
}
