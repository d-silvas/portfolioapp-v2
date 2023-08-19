package dev.davidsilva.portfolio.api.sbux;

import dev.davidsilva.portfolio.api.generic.PlAnalysis;
import dev.davidsilva.portfolio.dbcore.financialreport.FinancialReportPeriod;
import dev.davidsilva.portfolio.dbcore.sbux.SbuxFinancialReport;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class SbuxDebtAnalysisService {
    private final SbuxFinancialReportService sbuxFinancialReportService;
    private final SbuxPlAnalysisService sbuxPlAnalysisService;

    private PlAnalysis getPlAnalysisByPeriod(List<PlAnalysis> plAnalysisList, FinancialReportPeriod period) {
        return plAnalysisList.stream().filter(plAnalysis -> plAnalysis.getPeriod() == period).findFirst().orElse(null);
    }

    public List<SbuxDebtAnalysis> findAllYearly() throws Exception {
        List<SbuxFinancialReport> financialReports = sbuxFinancialReportService.findAllYearlyOrderByEndDateAsc();
        List<PlAnalysis> plAnalysisList = sbuxPlAnalysisService.findAllYearly();

        List<SbuxDebtAnalysis> debtAnalysisList = new ArrayList<>();
        for (int index = 0; index < financialReports.size(); index++) {
            SbuxFinancialReport financialReport = financialReports.get(index);
            if (financialReport.getIncomeStatement() == null || financialReport.getBalanceSheet() == null) {
                // TODO this may mess up delta/cagr information
                continue;
            }
            PlAnalysis plAnalysis = getPlAnalysisByPeriod(plAnalysisList, financialReport.getPeriod());
            SbuxDebtAnalysis debtAnalysis = new SbuxDebtAnalysis(financialReport, plAnalysis);
            debtAnalysisList.add(debtAnalysis);
        }
        return debtAnalysisList;
    }
}
