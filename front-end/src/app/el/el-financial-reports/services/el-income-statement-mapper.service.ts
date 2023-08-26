import { Injectable } from '@angular/core';
import type { ElIncomeStatement, ElIncomeStatementDto } from '../models';

@Injectable({ providedIn: 'root' })
export class ElIncomeStatementMapperService {
  map(elIncomeStatementDto: ElIncomeStatementDto): ElIncomeStatement {
    return {
      id: elIncomeStatementDto.id,
      netSales: elIncomeStatementDto.netSales,
      cogs: elIncomeStatementDto.cogs,
      grossProfit: elIncomeStatementDto.grossProfit,
      sga: elIncomeStatementDto.sga,
      restructuringAndOtherCharges:
        elIncomeStatementDto.restructuringAndOtherCharges,
      goodwillImpairment: elIncomeStatementDto.goodwillImpairment,
      impairmentOfOtherIntangibleAndLongLivedAssets:
        elIncomeStatementDto.impairmentOfOtherIntangibleAndLongLivedAssets,
      totalOperatingExpenses: elIncomeStatementDto.totalOperatingExpenses,
      operatingIncome: elIncomeStatementDto.operatingIncome,
      interestExpense: elIncomeStatementDto.interestExpense,
      interestIncomeAndInvestmentIncomeNet:
        elIncomeStatementDto.interestIncomeAndInvestmentIncomeNet,
      otherComponentsOfNetPeriodicBenefitCost:
        elIncomeStatementDto.otherComponentsOfNetPeriodicBenefitCost,
      otherIncomeNet: elIncomeStatementDto.otherIncomeNet,
      earningsBeforeIncomeTaxes: elIncomeStatementDto.earningsBeforeIncomeTaxes,
      provisionForIncomeTaxes: elIncomeStatementDto.provisionForIncomeTaxes,
      netEarnings: elIncomeStatementDto.netEarnings,
      netEarningsAttributableToEl:
        elIncomeStatementDto.netEarningsAttributableToEl,
      basicEpsAttributableToEl: elIncomeStatementDto.basicEpsAttributableToEl,
      dilutedEpsAttributableToEl:
        elIncomeStatementDto.dilutedEpsAttributableToEl,
      weightedAverageCommonSharesOutstandingBasic:
        elIncomeStatementDto.weightedAverageCommonSharesOutstandingBasic,
      weightedAverageCommonSharesOutstandingDiluted:
        elIncomeStatementDto.weightedAverageCommonSharesOutstandingDiluted,
    };
  }
}
