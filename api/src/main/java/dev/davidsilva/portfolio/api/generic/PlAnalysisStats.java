package dev.davidsilva.portfolio.api.generic;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import dev.davidsilva.portfolio.api.math.Stats;
import lombok.Getter;

import java.util.List;
import java.util.Objects;

@JsonPropertyOrder({
        "netRevenueDeltaStats",
//        "netRevenueCagr5",
//        "cogsDelta",
//        "cogsAsProportionOfRevenues",
//        "cogsCagr5",
//        "grossProfitAsProportionOfRevenues",
//        "grossProfitDelta",
//        "grossProfitCagr5",
//        "rndAsProportionOfRevenues",
//        "rndDelta",
//        "rndCagr5",
//        "sgaAsProportionOfRevenues",
//        "sgaDelta",
//        "sgaCagr5",
//        "ebitdaAsProportionOfRevenues",
//        "ebitdaDelta",
//        "ebitdaCagr5",
//        "ebitAsProportionOfRevenues",
//        "ebitDelta",
//        "ebitCagr5",
//        "ebtAsProportionOfRevenues",
//        "ebtDelta",
//        "ebtCagr5",
//        "taxPaidAsProportionOfEbt",
//        "taxPaidDelta",
//        "taxPaidCagr5",
//        "netIncomeAsProportionOfRevenues",
//        "netIncomeDelta",
//        "netIncomeCagr5",
//        "dilutedEpsDelta",
//        "dilutedEpsCagr5",
//        "dilutedEpsCagr10"
})
@Getter
public class PlAnalysisStats {
    private final Stats netRevenueDeltaStats;

    public PlAnalysisStats(List<PlAnalysisWithCagrs> plAnalysisList) {
        List<Double> allNetRevenueDeltas = plAnalysisList.stream().map(PlAnalysisWithCagrs::getNetRevenueDelta).filter(Objects::nonNull).toList();
        this.netRevenueDeltaStats = new Stats(allNetRevenueDeltas);
    }
}
