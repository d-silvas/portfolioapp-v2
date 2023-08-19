/**
 * TODO R&D
 */
export interface PlAnalysis {
  id: number;
  period: string;
  calendarYear: number;
  netRevenue: number;
  netRevenueDelta: number;
  netRevenueCagr5: number;
  netRevenueCagr10: number;
  cogs: number;
  cogsDelta: number;
  cogsAsProportionOfRevenues: number;
  cogsCagr5: number;
  cogsCagr10: number;
  grossProfit: number;
  grossProfitAsProportionOfRevenues: number;
  grossProfitDelta: number;
  grossProfitCagr5: number;
  grossProfitCagr10: number;
  sga: number;
  sgaAsProportionOfRevenues: number;
  sgaDelta: number;
  sgaCagr5: number;
  sgaCagr10: number;
  ebitda: number;
  ebitdaAsProportionOfRevenues: number;
  ebitdaDelta: number;
  ebitdaCagr5: number;
  ebitdaCagr10: number;
  ebit: number;
  ebitAsProportionOfRevenues: number;
  ebitDelta: number;
  ebitCagr5: number;
  ebitCagr10: number;
  ebt: number;
  ebtAsProportionOfRevenues: number;
  ebtDelta: number;
  ebtCagr5: number;
  ebtCagr10: number;
  taxPaid: number;
  taxPaidAsProportionOfEbt: number;
  taxPaidDelta: number;
  taxPaidCagr5: number;
  taxPaidCagr10: number;
  netIncome: number;
  netIncomeAsProportionOfRevenues: number;
  netIncomeDelta: number;
  netIncomeCagr5: number;
  netIncomeCagr10: number;
}
