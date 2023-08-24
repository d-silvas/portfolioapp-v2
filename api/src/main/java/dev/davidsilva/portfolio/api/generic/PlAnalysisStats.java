package dev.davidsilva.portfolio.api.generic;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import dev.davidsilva.portfolio.api.math.Stats;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@JsonPropertyOrder({
        "netRevenueDeltaStats",
        "netRevenueCagr5Stats",
        "cogsDeltaStats",
        "cogsAsProportionOfRevenuesStats",
        "cogsCagr5Stats",
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
    private final Stats netRevenueCagr5Stats;
    private final Stats cogsDeltaStats;
    private final Stats cogsAsProportionOfRevenuesStats;
    private final Stats cogsCagr5Stats;

    public PlAnalysisStats(List<PlAnalysisWithCagrs> plAnalysisList) {
        List<Double> allNetRevenueDeltas = new ArrayList<>();
        List<Double> allNetRevenueCagr5s = new ArrayList<>();
        List<Double> allCogsDeltas = new ArrayList<>();
        List<Double> allCogsAsProportionOfRevenues = new ArrayList<>();
        List<Double> allCogsCagr5s = new ArrayList<>();

        plAnalysisList.stream().forEachOrdered(plAnalysisWithCagrs -> {
            allNetRevenueDeltas.add(plAnalysisWithCagrs.getNetRevenueDelta());
            allNetRevenueCagr5s.add(plAnalysisWithCagrs.getNetRevenueCagr5());
            allCogsDeltas.add(plAnalysisWithCagrs.getCogsDelta());
            allCogsAsProportionOfRevenues.add(plAnalysisWithCagrs.getCogsAsProportionOfRevenues());
            allCogsCagr5s.add(plAnalysisWithCagrs.getCogsCagr5());
        });

        this.netRevenueDeltaStats = new Stats(allNetRevenueDeltas);
        this.netRevenueCagr5Stats = new Stats(allNetRevenueCagr5s);
        this.cogsDeltaStats = new Stats(allCogsDeltas);
        this.cogsAsProportionOfRevenuesStats = new Stats(allCogsAsProportionOfRevenues);
        this.cogsCagr5Stats = new Stats(allCogsCagr5s);
    }
}
