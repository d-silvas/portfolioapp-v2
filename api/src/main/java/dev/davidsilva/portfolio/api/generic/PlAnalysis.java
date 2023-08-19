package dev.davidsilva.portfolio.api.generic;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import dev.davidsilva.portfolio.dbcore.financialreport.FinancialReportPeriod;
import lombok.Getter;
import lombok.NoArgsConstructor;
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
        "rnd",
        "rndAsProportionOfRevenues",
        "rndDelta",
        "rndCagr5",
        "rndCagr10",
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
@Getter
@Setter
@NoArgsConstructor
public class PlAnalysis {
    private Integer calendarYear;
    private FinancialReportPeriod period;
    private Double netRevenue;
    private Double netRevenueDelta;
    private Double netRevenueCagr5;
    private Double netRevenueCagr10;
    private Double cogs;
    private Double cogsAsProportionOfRevenues;
    private Double cogsDelta;
    private Double cogsCagr5;
    private Double cogsCagr10;
    private Double grossProfit;
    private Double grossProfitAsProportionOfRevenues;
    private Double grossProfitDelta;
    private Double grossProfitCagr5;
    private Double grossProfitCagr10;
    private Double rnd;
    private Double rndAsProportionOfRevenues;
    private Double rndDelta;
    private Double rndCagr5;
    private Double rndCagr10;
    private Double sga;
    private Double sgaAsProportionOfRevenues;
    private Double sgaDelta;
    private Double sgaCagr5;
    private Double sgaCagr10;
    private Double ebitda;
    private Double ebitdaAsProportionOfRevenues;
    private Double ebitdaDelta;
    private Double ebitdaCagr5;
    private Double ebitdaCagr10;
    private Double ebit;
    private Double ebitAsProportionOfRevenues;
    private Double ebitDelta;
    private Double ebitCagr5;
    private Double ebitCagr10;
    private Double ebt;
    private Double ebtAsProportionOfRevenues;
    private Double ebtDelta;
    private Double ebtCagr5;
    private Double ebtCagr10;
    private Double taxPaid;
    private Double taxPaidAsProportionOfEbt;
    private Double taxPaidDelta;
    private Double taxPaidCagr5;
    private Double taxPaidCagr10;
    private Double netIncome;
    private Double netIncomeAsProportionOfRevenues;
    private Double netIncomeDelta;
    private Double netIncomeCagr5;
    private Double netIncomeCagr10;

    private static boolean isNotNull(Double quantity) {
        return quantity != null;
    }

    private static boolean isNotZero(Double quantity) {
        return quantity != 0;
    }

    public void calculateQuantitiesAsProportionOfRevenues() {
        if (isNotNull(this.netRevenue) && isNotZero(this.netRevenue)) {
            if (isNotNull(this.cogs)) {
                this.cogsAsProportionOfRevenues = this.cogs / this.netRevenue;
                this.grossProfit = this.netRevenue - this.cogs;
            }
            if (isNotNull(this.grossProfit)) {
                this.grossProfitAsProportionOfRevenues = this.grossProfit / this.netRevenue;
            }
            if (isNotNull(this.rnd)) {
                this.rndAsProportionOfRevenues = this.rnd / this.netRevenue;
            }
            if (isNotNull(this.sga)) {
                this.sgaAsProportionOfRevenues = this.sga / this.netRevenue;
            }
            if (isNotNull(this.ebitda)) {
                this.ebitdaAsProportionOfRevenues = this.ebitda / this.netRevenue;
            }
            if (isNotNull(this.ebit)) {
                this.ebitAsProportionOfRevenues = this.ebit / this.netRevenue;
            }
            if (isNotNull(this.ebt)) {
                this.ebtAsProportionOfRevenues = this.ebt / this.netRevenue;
            }
            if (isNotNull(this.netIncome)) {
                this.netIncomeAsProportionOfRevenues = this.netIncome / this.netRevenue;
            }
        }
        if (isNotNull(this.taxPaid) && isNotNull(this.ebt) && isNotZero(this.ebt)) {
            this.taxPaidAsProportionOfEbt = this.taxPaid / this.ebt;
        }
    }
}
