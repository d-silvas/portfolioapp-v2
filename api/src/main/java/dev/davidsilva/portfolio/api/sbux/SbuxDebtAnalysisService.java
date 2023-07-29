package dev.davidsilva.portfolio.api.sbux;

import dev.davidsilva.portfolio.dbcore.sbux.SbuxFinancialReport;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class SbuxDebtAnalysisService {
    private final SbuxFinancialReportService sbuxFinancialReportService;

    public List<SbuxDebtAnalysis> findAllYearly() {
        List<SbuxFinancialReport> financialReports = sbuxFinancialReportService.findAllYearlyOrderByEndDateAsc();
        List<SbuxDebtAnalysis> debtAnalysisList = new ArrayList<>();
        for (int index = 0; index < financialReports.size(); index++) {
            SbuxFinancialReport financialReport = financialReports.get(index);
            // TODO this may mess up delta/cagr calculations
            if (financialReport.getIncomeStatement() == null || financialReport.getBalanceSheet() == null) {
                continue;
            }
            SbuxPlAnalysis plAnalysis = new SbuxPlAnalysis(financialReport);
            SbuxDebtAnalysis debtAnalysis = new SbuxDebtAnalysis(financialReport, plAnalysis);
            debtAnalysisList.add(debtAnalysis);
        }
        return debtAnalysisList;
    }
}
