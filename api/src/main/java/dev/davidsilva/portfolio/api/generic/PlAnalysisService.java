package dev.davidsilva.portfolio.api.generic;

import dev.davidsilva.portfolio.api.utils.CalculationsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PlAnalysisService {
    private final CalculationsService calculationsService;

    private Double getDelta(Double previousValue, Double currentValue) {
        return calculationsService.getDelta(previousValue, currentValue);
    }

    private Double getCagr5(Double previousValue, Double currentValue) {
        return calculationsService.getCagr5(previousValue, currentValue);
    }

    private Double getCagr10(Double previousValue, Double currentValue) {
        return calculationsService.getCagr10(previousValue, currentValue);
    }

    /**
     * NOTE: The list should be ordered by end date ascending
     *
     * @param plAnalysisList The list of PL Analyses without cags calculated
     * @return The same list of PL Analyses, but with the cagrs calculated
     */
    public List<PlAnalysis> calculateCagrs(List<PlAnalysis> plAnalysisList) throws PlAnalysisListOutOfOrderException {
        for (int index = 0; index < plAnalysisList.size(); index++) {
            PlAnalysis plAnalysis = plAnalysisList.get(index);
            if (index >= 1) {
                PlAnalysis previousPlAnalysis = plAnalysisList.get(index - 1);
                // Check order is correct
                Integer previousPlAnalysisCalendarYear = previousPlAnalysis.getCalendarYear();
                Integer currentPlAnalysisCalendarYear = plAnalysis.getCalendarYear();
                if (previousPlAnalysisCalendarYear > currentPlAnalysisCalendarYear) {
                    throw new PlAnalysisListOutOfOrderException("Pl Analysis for year " + previousPlAnalysisCalendarYear + " was before Pl Analysis for year " + currentPlAnalysisCalendarYear);
                }
                plAnalysis.setNetRevenueDelta(getDelta(previousPlAnalysis.getNetRevenue(), plAnalysis.getNetRevenue()));
                plAnalysis.setCogsDelta(getDelta(previousPlAnalysis.getCogs(), plAnalysis.getCogs()));
                plAnalysis.setGrossProfitDelta(getDelta(previousPlAnalysis.getGrossProfit(), plAnalysis.getGrossProfit()));
                plAnalysis.setRndDelta(getDelta(previousPlAnalysis.getRnd(), plAnalysis.getRnd()));
                plAnalysis.setSgaDelta(getDelta(previousPlAnalysis.getSga(), plAnalysis.getSga()));
                plAnalysis.setEbitdaDelta(getDelta(previousPlAnalysis.getEbitda(), plAnalysis.getEbitda()));
                plAnalysis.setEbitDelta(getDelta(previousPlAnalysis.getEbit(), plAnalysis.getEbit()));
                plAnalysis.setEbtDelta(getDelta(previousPlAnalysis.getEbt(), plAnalysis.getEbt()));
                plAnalysis.setTaxPaidDelta(getDelta(previousPlAnalysis.getTaxPaid(), plAnalysis.getTaxPaid()));
                plAnalysis.setNetIncomeDelta(getDelta(previousPlAnalysis.getNetIncome(), plAnalysis.getNetIncome()));
            }
            if (index >= 5) {
                PlAnalysis previousPlAnalysis = plAnalysisList.get(index - 5);
                plAnalysis.setNetRevenueCagr5(getCagr5(previousPlAnalysis.getNetRevenue(), plAnalysis.getNetRevenue()));
                plAnalysis.setCogsCagr5(getCagr5(previousPlAnalysis.getCogs(), plAnalysis.getCogs()));
                plAnalysis.setGrossProfitCagr5(getCagr5(previousPlAnalysis.getGrossProfit(), plAnalysis.getGrossProfit()));
                plAnalysis.setRndCagr5(getDelta(previousPlAnalysis.getRnd(), plAnalysis.getRnd()));
                plAnalysis.setSgaCagr5(getCagr5(previousPlAnalysis.getSga(), plAnalysis.getSga()));
                plAnalysis.setEbitdaCagr5(getCagr5(previousPlAnalysis.getEbitda(), plAnalysis.getEbitda()));
                plAnalysis.setEbitCagr5(getCagr5(previousPlAnalysis.getEbit(), plAnalysis.getEbit()));
                plAnalysis.setEbtCagr5(getCagr5(previousPlAnalysis.getEbt(), plAnalysis.getEbt()));
                plAnalysis.setTaxPaidCagr5(getCagr5(previousPlAnalysis.getTaxPaid(), plAnalysis.getTaxPaid()));
                plAnalysis.setNetIncomeCagr5(getCagr5(previousPlAnalysis.getNetIncome(), plAnalysis.getNetIncome()));
            }
            if (index >= 10) {
                PlAnalysis previousPlAnalysis = plAnalysisList.get(index - 10);
                plAnalysis.setNetRevenueCagr10(getCagr10(previousPlAnalysis.getNetRevenue(), plAnalysis.getNetRevenue()));
                plAnalysis.setCogsCagr10(getCagr10(previousPlAnalysis.getCogs(), plAnalysis.getCogs()));
                plAnalysis.setGrossProfitCagr10(getCagr10(previousPlAnalysis.getGrossProfit(), plAnalysis.getGrossProfit()));
                plAnalysis.setRndCagr5(getDelta(previousPlAnalysis.getRnd(), plAnalysis.getRnd()));
                plAnalysis.setSgaCagr10(getCagr10(previousPlAnalysis.getSga(), plAnalysis.getSga()));
                plAnalysis.setEbitdaCagr10(getCagr10(previousPlAnalysis.getEbitda(), plAnalysis.getEbitda()));
                plAnalysis.setEbitCagr10(getCagr10(previousPlAnalysis.getEbit(), plAnalysis.getEbit()));
                plAnalysis.setEbtCagr10(getCagr10(previousPlAnalysis.getEbt(), plAnalysis.getEbt()));
                plAnalysis.setTaxPaidCagr10(getCagr10(previousPlAnalysis.getTaxPaid(), plAnalysis.getTaxPaid()));
                plAnalysis.setNetIncomeCagr10(getCagr10(previousPlAnalysis.getNetIncome(), plAnalysis.getNetIncome()));
            }
        }
        return plAnalysisList;
    }
}
