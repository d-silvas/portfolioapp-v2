import { Injectable } from '@angular/core';
import { SbuxDebtAnalysis, SbuxDebtAnalysisTableInfo } from '../models';

@Injectable({ providedIn: 'root' })
export class SbuxDebtAnalysisTableInfoMapperService {
  map(debtAnalysis: SbuxDebtAnalysis[]): SbuxDebtAnalysisTableInfo {
    const sbuxDebtAnalysisTableInfo: SbuxDebtAnalysisTableInfo = {
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
    for (const [index, singleDebtAnalysis] of debtAnalysis.entries()) {
      sbuxDebtAnalysisTableInfo.id.push(singleDebtAnalysis.id);
      // TODO
      sbuxDebtAnalysisTableInfo.period.push(
        `FY${singleDebtAnalysis.calendarYear}`
      );
      sbuxDebtAnalysisTableInfo.netRevenue.push(singleDebtAnalysis.netRevenue);
      sbuxDebtAnalysisTableInfo.netRevenueDelta.push(
        singleDebtAnalysis.netRevenueDelta
      );
      sbuxDebtAnalysisTableInfo.netRevenueCagr5.push(
        singleDebtAnalysis.netRevenueCagr5
      );
      sbuxDebtAnalysisTableInfo.netRevenueCagr10.push(
        singleDebtAnalysis.netRevenueCagr10
      );
      sbuxDebtAnalysisTableInfo.cogs.push(singleDebtAnalysis.cogs);
      sbuxDebtAnalysisTableInfo.cogsDelta.push(singleDebtAnalysis.cogsDelta);
      sbuxDebtAnalysisTableInfo.cogsAsProportionOfRevenues.push(
        singleDebtAnalysis.cogsAsProportionOfRevenues
      );
      sbuxDebtAnalysisTableInfo.cogsCagr5.push(singleDebtAnalysis.cogsCagr5);
      sbuxDebtAnalysisTableInfo.cogsCagr10.push(singleDebtAnalysis.cogsCagr10);
      sbuxDebtAnalysisTableInfo.grossProfit.push(
        singleDebtAnalysis.grossProfit
      );
      sbuxDebtAnalysisTableInfo.grossProfitAsProportionOfRevenues.push(
        singleDebtAnalysis.grossProfitAsProportionOfRevenues
      );
      sbuxDebtAnalysisTableInfo.grossProfitDelta.push(
        singleDebtAnalysis.grossProfitDelta
      );
      sbuxDebtAnalysisTableInfo.grossProfitCagr5.push(
        singleDebtAnalysis.grossProfitCagr5
      );
      sbuxDebtAnalysisTableInfo.grossProfitCagr10.push(
        singleDebtAnalysis.grossProfitCagr10
      );
      sbuxDebtAnalysisTableInfo.sga.push(singleDebtAnalysis.sga);
      sbuxDebtAnalysisTableInfo.sgaAsProportionOfRevenues.push(
        singleDebtAnalysis.sgaAsProportionOfRevenues
      );
      sbuxDebtAnalysisTableInfo.sgaDelta.push(singleDebtAnalysis.sgaDelta);
      sbuxDebtAnalysisTableInfo.sgaCagr5.push(singleDebtAnalysis.sgaCagr5);
      sbuxDebtAnalysisTableInfo.sgaCagr10.push(singleDebtAnalysis.sgaCagr10);
      sbuxDebtAnalysisTableInfo.ebitda.push(singleDebtAnalysis.ebitda);
      sbuxDebtAnalysisTableInfo.ebitdaAsProportionOfRevenues.push(
        singleDebtAnalysis.ebitdaAsProportionOfRevenues
      );
      sbuxDebtAnalysisTableInfo.ebitdaDelta.push(
        singleDebtAnalysis.ebitdaDelta
      );
      sbuxDebtAnalysisTableInfo.ebitdaCagr5.push(
        singleDebtAnalysis.ebitdaCagr5
      );
      sbuxDebtAnalysisTableInfo.ebitdaCagr10.push(
        singleDebtAnalysis.ebitdaCagr10
      );
      sbuxDebtAnalysisTableInfo.ebit.push(singleDebtAnalysis.ebit);
      sbuxDebtAnalysisTableInfo.ebitAsProportionOfRevenues.push(
        singleDebtAnalysis.ebitAsProportionOfRevenues
      );
      sbuxDebtAnalysisTableInfo.ebitDelta.push(singleDebtAnalysis.ebitDelta);
      sbuxDebtAnalysisTableInfo.ebitCagr5.push(singleDebtAnalysis.ebitCagr5);
      sbuxDebtAnalysisTableInfo.ebitCagr10.push(singleDebtAnalysis.ebitCagr10);
      sbuxDebtAnalysisTableInfo.ebt.push(singleDebtAnalysis.ebt);
      sbuxDebtAnalysisTableInfo.ebtAsProportionOfRevenues.push(
        singleDebtAnalysis.ebtAsProportionOfRevenues
      );
      sbuxDebtAnalysisTableInfo.ebtDelta.push(singleDebtAnalysis.ebtDelta);
      sbuxDebtAnalysisTableInfo.ebtCagr5.push(singleDebtAnalysis.ebtCagr5);
      sbuxDebtAnalysisTableInfo.ebtCagr10.push(singleDebtAnalysis.ebtCagr10);
      sbuxDebtAnalysisTableInfo.taxPaid.push(singleDebtAnalysis.taxPaid);
      sbuxDebtAnalysisTableInfo.taxPaidAsProportionOfEbt.push(
        singleDebtAnalysis.taxPaidAsProportionOfEbt
      );
      sbuxDebtAnalysisTableInfo.taxPaidDelta.push(
        singleDebtAnalysis.taxPaidDelta
      );
      sbuxDebtAnalysisTableInfo.taxPaidCagr5.push(
        singleDebtAnalysis.taxPaidCagr5
      );
      sbuxDebtAnalysisTableInfo.taxPaidCagr10.push(
        singleDebtAnalysis.taxPaidCagr10
      );
      sbuxDebtAnalysisTableInfo.netIncome.push(singleDebtAnalysis.netIncome);
      sbuxDebtAnalysisTableInfo.netIncomeAsProportionOfRevenues.push(
        singleDebtAnalysis.netIncomeAsProportionOfRevenues
      );
      sbuxDebtAnalysisTableInfo.netIncomeDelta.push(
        singleDebtAnalysis.netIncomeDelta
      );
      sbuxDebtAnalysisTableInfo.netIncomeCagr5.push(
        singleDebtAnalysis.netIncomeCagr5
      );
      sbuxDebtAnalysisTableInfo.netIncomeCagr10.push(
        singleDebtAnalysis.netIncomeCagr10
      );
    }
    return sbuxDebtAnalysisTableInfo;
  }
}
