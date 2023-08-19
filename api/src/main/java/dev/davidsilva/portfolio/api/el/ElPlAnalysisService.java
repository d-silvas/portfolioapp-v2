package dev.davidsilva.portfolio.api.el;

import dev.davidsilva.portfolio.api.generic.PlAnalysis;
import dev.davidsilva.portfolio.api.generic.PlAnalysisService;
import dev.davidsilva.portfolio.dbcore.el.ElFinancialReport;
import dev.davidsilva.portfolio.dbcore.el.ElIncomeStatement;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ElPlAnalysisService {
    private final ElFinancialReportService elFinancialReportService;
    private final PlAnalysisService plAnalysisService;

    public List<PlAnalysis> findAllYearly() throws Exception {
        List<ElFinancialReport> financialReports = elFinancialReportService.findAllYearlyOrderByEndDateAsc();
        List<PlAnalysis> plAnalysisList = new ArrayList<>();
        for (ElFinancialReport financialReport : financialReports) {
            ElIncomeStatement incomeStatement = financialReport.getIncomeStatement();

            PlAnalysis plAnalysis = new PlAnalysis();
            plAnalysis.setCalendarYear(financialReport.getCalendarYear());
            plAnalysis.setPeriod(financialReport.getPeriod());
            plAnalysis.setNetRevenue(incomeStatement.getNetSales());
            plAnalysis.setCogs(incomeStatement.getCogs());
            plAnalysis.setGrossProfit(incomeStatement.getGrossProfit());
            // Including impairments and restructuring as SG&A
            plAnalysis.setSga(incomeStatement.getTotalOperatingExpenses());
            // TODO add back D&A from cash flows
            // plAnalysis.setEbitda(incomeStatement.getOperatingIncome());
            plAnalysis.setEbit(incomeStatement.getOperatingIncome());
            plAnalysis.setEbt(incomeStatement.getEarningsBeforeIncomeTaxes());
            plAnalysis.setTaxPaid(incomeStatement.getProvisionForIncomeTaxes());
            plAnalysis.setNetIncome(incomeStatement.getNetEarnings());

            plAnalysis.calculateQuantitiesAsProportionOfRevenues();

            plAnalysisList.add(plAnalysis);
        }

        return plAnalysisService.calculateCagrs(plAnalysisList);
    }
}
