package dev.davidsilva.portfolio.api.sbux;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import dev.davidsilva.portfolio.dbcore.financialreport.FinancialReportPeriod;
import dev.davidsilva.portfolio.dbcore.sbux.SbuxFinancialReport;
import dev.davidsilva.portfolio.dbcore.sbux.SbuxIncomeStatement;
import lombok.Getter;
import lombok.Setter;

@JsonPropertyOrder({
        "calendarYear",
        "period",
        "netRevenue",
        "netRevenueDelta",
        "netRevenueCagr5",
        "netRevenueCagr10",
        "cogs",
        "cogsDelta",
        "cogsAsProportionOfRevenues",
        "cogsCagr5",
        "cogsCagr10",
        "grossProfit",
        "grossProfitAsProportionOfRevenues",
        "grossProfitDelta",
        "grossProfitCagr5",
        "grossProfitCagr10",
        "sga",
        "sgaAsProportionOfRevenues",
        "sgaDelta",
        "sgaCagr5",
        "sgaCagr10",
        "ebitda",
        "ebitdaAsProportionOfRevenues",
        "ebitdaDelta",
        "ebitdaCagr5",
        "ebitdaCagr10",
        "ebit",
        "ebitAsProportionOfRevenues",
        "ebitDelta",
        "ebitCagr5",
        "ebitCagr10",
        "ebt",
        "ebtAsProportionOfRevenues",
        "ebtDelta",
        "ebtCagr5",
        "ebtCagr10",
        "taxPaid",
        "taxPaidAsProportionOfEbt",
        "taxPaidDelta",
        "taxPaidCagr5",
        "taxPaidCagr10",
        "netIncome",
        "netIncomeAsProportionOfRevenues",
        "netIncomeDelta",
        "netIncomeCagr5",
        "netIncomeCagr10",
})
public class SbuxPlAnalysis {
    @Getter
    private final Double netRevenue;
    @Getter
    private final Double cogs;
    @Getter
    private final Double cogsAsProportionOfRevenues;
    @Getter
    private final Double grossProfit;
    @Getter
    private final Double grossProfitAsProportionOfRevenues;
    @Getter
    private final Double sga;
    @Getter
    private final Double sgaAsProportionOfRevenues;
    @Getter
    private final Double ebitda;
    @Getter
    private final Double ebitdaAsProportionOfRevenues;
    @Getter
    private final Double ebit;
    @Getter
    private final Double ebitAsProportionOfRevenues;
    @Getter
    private final Double ebt;
    @Getter
    private final Double ebtAsProportionOfRevenues;
    @Getter
    private final Double taxPaid;
    @Getter
    private final Double taxPaidAsProportionOfEbt;
    @Getter
    private final Double netIncome;
    @Getter
    private final FinancialReportPeriod period;
    @Getter
    private final Integer calendarYear;
    @Getter
    @Setter
    private Double netRevenueDelta;
    @Getter
    @Setter
    private Double netRevenueCagr5;
    @Getter
    @Setter
    private Double netRevenueCagr10;
    @Getter
    @Setter
    private Double cogsDelta;
    @Getter
    @Setter
    private Double cogsCagr5;
    @Getter
    @Setter
    private Double cogsCagr10;
    @Getter
    @Setter
    private Double grossProfitDelta;
    @Getter
    @Setter
    private Double grossProfitCagr5;
    @Getter
    @Setter
    private Double grossProfitCagr10;
    @Getter
    @Setter
    private Double sgaDelta;
    @Getter
    @Setter
    private Double sgaCagr5;
    @Getter
    @Setter
    private Double sgaCagr10;
    @Getter
    @Setter
    private Double ebitdaDelta;
    @Getter
    @Setter
    private Double ebitdaCagr5;
    @Getter
    @Setter
    private Double ebitdaCagr10;
    @Getter
    @Setter
    private Double ebitDelta;
    @Getter
    @Setter
    private Double ebitCagr5;
    @Getter
    @Setter
    private Double ebitCagr10;
    @Getter
    @Setter
    private Double ebtDelta;
    @Getter
    @Setter
    private Double ebtCagr5;
    @Getter
    @Setter
    private Double ebtCagr10;
    @Getter
    @Setter
    private Double taxPaidDelta;
    @Getter
    @Setter
    private Double taxPaidCagr5;
    @Getter
    @Setter
    private Double taxPaidCagr10;
    @Getter
    private Double netIncomeAsProportionOfRevenues;
    @Getter
    @Setter
    private Double netIncomeDelta;
    @Getter
    @Setter
    private Double netIncomeCagr5;
    @Getter
    @Setter
    private Double netIncomeCagr10;

    SbuxPlAnalysis(SbuxFinancialReport financialReport) {
        SbuxIncomeStatement incomeStatement = financialReport.getIncomeStatement();
        this.calendarYear = financialReport.getCalendarYear();
        this.period = financialReport.getPeriod();
        this.netRevenue = incomeStatement.getNetRevenues();
        this.cogs = incomeStatement.getProductAndDistributionCosts()
                + incomeStatement.getStoreOperatingExpenses()
                + incomeStatement.getOtherOperatingExpenses()
                + incomeStatement.getDepreciationAndAmortizationExpenses();
        this.cogsAsProportionOfRevenues = this.cogs / this.netRevenue;
        this.grossProfit = this.netRevenue - this.cogs;
        this.grossProfitAsProportionOfRevenues = this.grossProfit / this.netRevenue;
        this.sga = incomeStatement.getGeneralAndAdministrativeExpenses()
                + incomeStatement.getRestructuringAndImpairments();
        this.sgaAsProportionOfRevenues = this.sga / this.netRevenue;
        this.ebitda = incomeStatement.getOperatingIncome()
                + incomeStatement.getDepreciationAndAmortizationExpenses();
        this.ebitdaAsProportionOfRevenues = this.ebitda / this.netRevenue;
        this.ebit = incomeStatement.getOperatingIncome();
        this.ebitAsProportionOfRevenues = this.ebit / this.netRevenue;
        this.ebt = incomeStatement.getEarningsBeforeIncomeTaxes();
        this.ebtAsProportionOfRevenues = this.ebt / this.netRevenue;
        this.taxPaid = incomeStatement.getIncomeTaxExpense();
        this.taxPaidAsProportionOfEbt = this.taxPaid / this.ebt;
        this.netIncome = incomeStatement.getNetEarnings();
    }

}
