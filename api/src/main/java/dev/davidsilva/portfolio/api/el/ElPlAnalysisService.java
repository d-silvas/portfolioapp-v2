package dev.davidsilva.portfolio.api.el;

import dev.davidsilva.portfolio.api.generic.PlAnalysis;
import dev.davidsilva.portfolio.api.generic.PlAnalysisListWithStats;
import dev.davidsilva.portfolio.api.generic.PlAnalysisService;
import dev.davidsilva.portfolio.api.generic.PlAnalysisWithCagrs;
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

    private void fillPlAnalysisProperties(PlAnalysis initialPlAnalysis, ElFinancialReport financialReport) {
        ElIncomeStatement incomeStatement = financialReport.getIncomeStatement();

        initialPlAnalysis.setCalendarYear(financialReport.getCalendarYear());
        initialPlAnalysis.setPeriod(financialReport.getPeriod());
        initialPlAnalysis.setNetRevenue(incomeStatement.getNetSales());
        initialPlAnalysis.setCogs(incomeStatement.getCogs());
        initialPlAnalysis.setGrossProfit(incomeStatement.getGrossProfit());
        // Including impairments and restructuring as SG&A
        initialPlAnalysis.setSga(incomeStatement.getTotalOperatingExpenses());
        // TODO add back D&A from cash flows
        // plAnalysis.setEbitda(incomeStatement.getOperatingIncome());
        initialPlAnalysis.setEbit(incomeStatement.getOperatingIncome());
        initialPlAnalysis.setEbt(incomeStatement.getEarningsBeforeIncomeTaxes());
        initialPlAnalysis.setTaxPaid(incomeStatement.getProvisionForIncomeTaxes());
        initialPlAnalysis.setNetIncome(incomeStatement.getNetEarnings());
        initialPlAnalysis.setDilutedEps(incomeStatement.getDilutedEpsAttributableToEl());

        initialPlAnalysis.calculateQuantitiesAsProportionOfRevenues();

    }

    public List<PlAnalysisWithCagrs> findAllYearly() throws Exception {
        List<ElFinancialReport> financialReports = elFinancialReportService.findAllYearlyOrderByEndDateAsc();
        List<PlAnalysisWithCagrs> plAnalysisList = new ArrayList<>();
        for (ElFinancialReport financialReport : financialReports) {
            PlAnalysisWithCagrs plAnalysis = new PlAnalysisWithCagrs();
            fillPlAnalysisProperties(plAnalysis, financialReport);
            plAnalysisList.add(plAnalysis);
        }

        return plAnalysisService.calculateCagrs(plAnalysisList);
    }

    public PlAnalysisListWithStats findAllYearlyWithStats() throws Exception {
        List<ElFinancialReport> financialReports = elFinancialReportService.findAllYearlyOrderByEndDateAsc();
        List<PlAnalysisWithCagrs> plAnalysisList = new ArrayList<>();
        for (ElFinancialReport financialReport : financialReports) {
            PlAnalysisWithCagrs plAnalysis = new PlAnalysisWithCagrs();
            fillPlAnalysisProperties(plAnalysis, financialReport);
            plAnalysisList.add(plAnalysis);
        }

        return plAnalysisService.createPlAnalysisListWithStats(plAnalysisList);
    }
}
