package dev.davidsilva.portfolio.api.generic;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
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
        "dilutedEps",
        "dilutedEpsDelta",
        "dilutedEpsCagr5",
        "dilutedEpsCagr10"
})
@Getter
@Setter
@NoArgsConstructor
public class PlAnalysisWithCagrs extends PlAnalysis {
    private Double netRevenueDelta;
    private Double netRevenueCagr5;
    private Double netRevenueCagr10;
    private Double cogsDelta;
    private Double cogsCagr5;
    private Double cogsCagr10;
    private Double grossProfitDelta;
    private Double grossProfitCagr5;
    private Double grossProfitCagr10;
    private Double rndDelta;
    private Double rndCagr5;
    private Double rndCagr10;
    private Double sgaDelta;
    private Double sgaCagr5;
    private Double sgaCagr10;
    private Double ebitdaDelta;
    private Double ebitdaCagr5;
    private Double ebitdaCagr10;
    private Double ebitDelta;
    private Double ebitCagr5;
    private Double ebitCagr10;
    private Double ebtDelta;
    private Double ebtCagr5;
    private Double ebtCagr10;
    private Double taxPaidDelta;
    private Double taxPaidCagr5;
    private Double taxPaidCagr10;
    private Double netIncomeDelta;
    private Double netIncomeCagr5;
    private Double netIncomeCagr10;
    private Double dilutedEpsDelta;
    private Double dilutedEpsCagr5;
    private Double dilutedEpsCagr10;
}
