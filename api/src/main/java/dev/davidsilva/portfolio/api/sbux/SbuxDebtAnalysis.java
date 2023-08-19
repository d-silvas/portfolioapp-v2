package dev.davidsilva.portfolio.api.sbux;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import dev.davidsilva.portfolio.api.generic.PlAnalysis;
import dev.davidsilva.portfolio.dbcore.sbux.SbuxBalanceSheet;
import dev.davidsilva.portfolio.dbcore.sbux.SbuxFinancialReport;
import dev.davidsilva.portfolio.dbcore.sbux.SbuxIncomeStatement;
import lombok.Getter;

@JsonPropertyOrder({
        "totalDebt",
        "netDebt",
        "netDebtToEbitda",
        "netDebtToEbit",
        "interestExpense",
        "interestIncome",
        "netInterestExpense",
        "interestEbitCoverageRatio",
        "effectiveInterestRate"
})
public class SbuxDebtAnalysis {
    @Getter
    private final Double totalDebt;
    @Getter
    private final Double netDebt;
    @Getter
    private final Double netDebtToEbitda;
    @Getter
    private final Double netDebtToEbit;
    @Getter
    private final Double interestExpense;
    @Getter
    private final Double interestIncome;
    @Getter
    private final Double netInterestExpense;
    @Getter
    private final Double interestEbitCoverageRatio;
    @Getter
    private final Double effectiveInterestRate;

    SbuxDebtAnalysis(SbuxFinancialReport financialReport, PlAnalysis plAnalysis) {
        SbuxIncomeStatement incomeStatement = financialReport.getIncomeStatement();
        SbuxBalanceSheet balanceSheet = financialReport.getBalanceSheet();
        this.totalDebt = balanceSheet.getShortTermDebt() + balanceSheet.getCurrentPortionOfLongTermDebt()
                + balanceSheet.getLongTermDebt();
        this.netDebt = this.getTotalDebt() - balanceSheet.getCashAndCashEquivalents()
                - balanceSheet.getShortTermInvestments();
        this.netDebtToEbitda = this.getNetDebt() / plAnalysis.getEbitda();
        this.netDebtToEbit = this.getNetDebt() / plAnalysis.getEbit();
        this.interestExpense = incomeStatement.getInterestExpense();
        // Interest income is included in "Interest income and other". To be conservative,
        // we assign a third of this quantity as interest income. For more details, see the 10Ks
        this.interestIncome = incomeStatement.getInterestIncomeAndOther() / 3;
        this.netInterestExpense = this.getInterestExpense() + this.getInterestIncome();
        this.interestEbitCoverageRatio = -plAnalysis.getEbit() / this.getNetInterestExpense();
        this.effectiveInterestRate = -this.getInterestExpense() / this.getTotalDebt();
    }
}
