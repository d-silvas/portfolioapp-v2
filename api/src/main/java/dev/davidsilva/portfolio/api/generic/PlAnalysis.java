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
        "cogs",
        "cogsAsProportionOfRevenues",
        "grossProfit",
        "grossProfitAsProportionOfRevenues",
        "rnd",
        "rndAsProportionOfRevenues",
        "sga",
        "sgaAsProportionOfRevenues",
        "ebitda",
        "ebitdaAsProportionOfRevenues",
        "ebit",
        "ebitAsProportionOfRevenues",
        "ebt",
        "ebtAsProportionOfRevenues",
        "taxPaid",
        "taxPaidAsProportionOfEbt",
        "netIncome",
        "netIncomeAsProportionOfRevenues",
        "dilutedEps",
})
@Getter
@Setter
@NoArgsConstructor
public class PlAnalysis {
    private Integer calendarYear;
    private FinancialReportPeriod period;
    private Double netRevenue;
    private Double cogs;
    private Double cogsAsProportionOfRevenues;
    private Double grossProfit;
    private Double grossProfitAsProportionOfRevenues;
    private Double rnd;
    private Double rndAsProportionOfRevenues;
    private Double sga;
    private Double sgaAsProportionOfRevenues;
    private Double ebitda;
    private Double ebitdaAsProportionOfRevenues;
    private Double ebit;
    private Double ebitAsProportionOfRevenues;
    private Double ebt;
    private Double ebtAsProportionOfRevenues;
    private Double taxPaid;
    private Double taxPaidAsProportionOfEbt;
    private Double netIncome;
    private Double netIncomeAsProportionOfRevenues;
    private Double dilutedEps;

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
