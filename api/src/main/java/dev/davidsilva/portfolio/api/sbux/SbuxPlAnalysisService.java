package dev.davidsilva.portfolio.api.sbux;

import dev.davidsilva.portfolio.dbcore.sbux.SbuxFinancialReport;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class SbuxPlAnalysisService {
    private final SbuxFinancialReportService sbuxFinancialReportService;

    private Double getDelta(Double previousValue, Double currentValue) {
        return (currentValue - previousValue) / previousValue;
    }

    private Double getCagr5(Double previousValue, Double currentValue) {
        // TODO test NAN/Infinites
        double power = Math.pow(currentValue / previousValue, 1.0 / 5);
        if (Double.isNaN(power) || Double.isInfinite(power)) {
            return null;
        }
        return power - 1;
    }

    private Double getCagr10(Double previousValue, Double currentValue) {
        double power = Math.pow(currentValue / previousValue, 1.0 / 10);
        if (Double.isNaN(power) || Double.isInfinite(power)) {
            return null;
        }
        return power - 1;
    }

    public List<SbuxPlAnalysis> findAllYearly() {
        List<SbuxFinancialReport> financialReports = sbuxFinancialReportService.findAllYearlyOrderByEndDateAsc();
        List<SbuxPlAnalysis> plAnalysisList = new ArrayList<>();
        for (int index = 0; index < financialReports.size(); index++) {
            SbuxPlAnalysis plAnalysis = new SbuxPlAnalysis(financialReports.get(index));
            if (index >= 1) {
                SbuxPlAnalysis previousPlAnalysis = plAnalysisList.get(index - 1);
                plAnalysis.setNetRevenueDelta(getDelta(previousPlAnalysis.getNetRevenue(), plAnalysis.getNetRevenue()));
                plAnalysis.setCogsDelta(getDelta(previousPlAnalysis.getCogs(), plAnalysis.getCogs()));
                plAnalysis.setGrossProfitDelta(getDelta(previousPlAnalysis.getGrossProfit(), plAnalysis.getGrossProfit()));
                plAnalysis.setSgaDelta(getDelta(previousPlAnalysis.getSga(), plAnalysis.getSga()));
                plAnalysis.setEbitdaDelta(getDelta(previousPlAnalysis.getEbitda(), plAnalysis.getEbitda()));
                plAnalysis.setEbitDelta(getDelta(previousPlAnalysis.getEbit(), plAnalysis.getEbit()));
                plAnalysis.setEbtDelta(getDelta(previousPlAnalysis.getEbt(), plAnalysis.getEbt()));
                plAnalysis.setTaxPaidDelta(getDelta(previousPlAnalysis.getTaxPaid(), plAnalysis.getTaxPaid()));
                plAnalysis.setNetIncomeDelta(getDelta(previousPlAnalysis.getNetIncome(), plAnalysis.getNetIncome()));
            }
            if (index >= 5) {
                SbuxPlAnalysis previousPlAnalysis = plAnalysisList.get(index - 5);
                plAnalysis.setNetRevenueCagr5(getCagr5(previousPlAnalysis.getNetRevenue(), plAnalysis.getNetRevenue()));
                plAnalysis.setCogsCagr5(getCagr5(previousPlAnalysis.getCogs(), plAnalysis.getCogs()));
                plAnalysis.setGrossProfitCagr5(getCagr5(previousPlAnalysis.getGrossProfit(), plAnalysis.getGrossProfit()));
                plAnalysis.setSgaCagr5(getCagr5(previousPlAnalysis.getSga(), plAnalysis.getSga()));
                plAnalysis.setEbitdaCagr5(getCagr5(previousPlAnalysis.getEbitda(), plAnalysis.getEbitda()));
                plAnalysis.setEbitCagr5(getCagr5(previousPlAnalysis.getEbit(), plAnalysis.getEbit()));
                plAnalysis.setEbtCagr5(getCagr5(previousPlAnalysis.getEbt(), plAnalysis.getEbt()));
                plAnalysis.setTaxPaidCagr5(getCagr5(previousPlAnalysis.getTaxPaid(), plAnalysis.getTaxPaid()));
                plAnalysis.setNetIncomeCagr5(getCagr5(previousPlAnalysis.getNetIncome(), plAnalysis.getNetIncome()));
            }
            if (index >= 10) {
                SbuxPlAnalysis previousPlAnalysis = plAnalysisList.get(index - 10);
                plAnalysis.setNetRevenueCagr10(getCagr10(previousPlAnalysis.getNetRevenue(), plAnalysis.getNetRevenue()));
                plAnalysis.setCogsCagr10(getCagr10(previousPlAnalysis.getCogs(), plAnalysis.getCogs()));
                plAnalysis.setGrossProfitCagr10(getCagr10(previousPlAnalysis.getGrossProfit(), plAnalysis.getGrossProfit()));
                plAnalysis.setSgaCagr10(getCagr10(previousPlAnalysis.getSga(), plAnalysis.getSga()));
                plAnalysis.setEbitdaCagr10(getCagr10(previousPlAnalysis.getEbitda(), plAnalysis.getEbitda()));
                plAnalysis.setEbitCagr10(getCagr10(previousPlAnalysis.getEbit(), plAnalysis.getEbit()));
                plAnalysis.setEbtCagr10(getCagr10(previousPlAnalysis.getEbt(), plAnalysis.getEbt()));
                plAnalysis.setTaxPaidCagr10(getCagr10(previousPlAnalysis.getTaxPaid(), plAnalysis.getTaxPaid()));
                plAnalysis.setNetIncomeCagr10(getCagr10(previousPlAnalysis.getNetIncome(), plAnalysis.getNetIncome()));
            }
            plAnalysisList.add(plAnalysis);
        }
        return plAnalysisList;
    }
}
