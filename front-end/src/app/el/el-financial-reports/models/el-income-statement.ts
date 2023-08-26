export interface ElIncomeStatement {
  id: number;
  netSales: number;
  cogs: number;
  grossProfit: number;
  sga: number;
  restructuringAndOtherCharges: number;
  goodwillImpairment: number;
  impairmentOfOtherIntangibleAndLongLivedAssets: number;
  totalOperatingExpenses: number;
  operatingIncome: number;
  interestExpense: number;
  interestIncomeAndInvestmentIncomeNet: number;
  otherComponentsOfNetPeriodicBenefitCost: number;
  otherIncomeNet: number;
  earningsBeforeIncomeTaxes: number;
  provisionForIncomeTaxes: number;
  netEarnings: number;
  netEarningsAttributableToEl: number;
  basicEpsAttributableToEl: number;
  dilutedEpsAttributableToEl: number;
  weightedAverageCommonSharesOutstandingBasic: number;
  weightedAverageCommonSharesOutstandingDiluted: number;
}
