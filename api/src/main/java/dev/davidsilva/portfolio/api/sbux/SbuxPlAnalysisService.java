package dev.davidsilva.portfolio.api.sbux;

import dev.davidsilva.portfolio.api.generic.PlAnalysis;
import dev.davidsilva.portfolio.api.generic.PlAnalysisService;
import dev.davidsilva.portfolio.api.generic.PlAnalysisWithCagrs;
import dev.davidsilva.portfolio.dbcore.sbux.SbuxFinancialReport;
import dev.davidsilva.portfolio.dbcore.sbux.SbuxIncomeStatement;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class SbuxPlAnalysisService {
    private final SbuxFinancialReportService sbuxFinancialReportService;
    private final PlAnalysisService plAnalysisService;

    public List<PlAnalysis> findAllYearly() {
        List<SbuxFinancialReport> financialReports = sbuxFinancialReportService.findAllYearlyOrderByEndDateAsc();
        List<PlAnalysis> plAnalysisList = new ArrayList<>();
        for (SbuxFinancialReport financialReport : financialReports) {
            PlAnalysis plAnalysis = new PlAnalysis();
            fillPlAnalysisProperties(plAnalysis, financialReport);
            plAnalysisList.add(plAnalysis);
        }

        return plAnalysisList;
    }

    public List<PlAnalysisWithCagrs> findAllYearlyWithCagrs() throws Exception {
        List<SbuxFinancialReport> financialReports = sbuxFinancialReportService.findAllYearlyOrderByEndDateAsc();
        List<PlAnalysisWithCagrs> plAnalysisList = new ArrayList<>();
        for (SbuxFinancialReport financialReport : financialReports) {
            PlAnalysisWithCagrs plAnalysis = new PlAnalysisWithCagrs();
            fillPlAnalysisProperties(plAnalysis, financialReport);
            plAnalysisList.add(plAnalysis);
        }

        return plAnalysisService.calculateCagrs(plAnalysisList);
    }

    private void fillPlAnalysisProperties(PlAnalysis initialPlAnalysis, SbuxFinancialReport financialReport) {
        SbuxIncomeStatement incomeStatement = financialReport.getIncomeStatement();
        initialPlAnalysis.setCalendarYear(financialReport.getCalendarYear());
        initialPlAnalysis.setPeriod(financialReport.getPeriod());
        initialPlAnalysis.setNetRevenue(incomeStatement.getNetRevenues());
        Double cogs = incomeStatement.getProductAndDistributionCosts() +
                incomeStatement.getStoreOperatingExpenses() +
                incomeStatement.getOtherOperatingExpenses() +
                incomeStatement.getDepreciationAndAmortizationExpenses();
        initialPlAnalysis.setCogs(cogs);
        initialPlAnalysis.setGrossProfit(incomeStatement.getNetRevenues() - cogs);
        initialPlAnalysis.setSga(incomeStatement.getGeneralAndAdministrativeExpenses() + incomeStatement.getRestructuringAndImpairments());
        initialPlAnalysis.setEbitda(incomeStatement.getOperatingIncome() + incomeStatement.getDepreciationAndAmortizationExpenses());
        initialPlAnalysis.setEbit(incomeStatement.getOperatingIncome());
        initialPlAnalysis.setEbt(incomeStatement.getEarningsBeforeIncomeTaxes());
        initialPlAnalysis.setTaxPaid(incomeStatement.getIncomeTaxExpense());
        initialPlAnalysis.setNetIncome(incomeStatement.getNetEarnings());
        initialPlAnalysis.setDilutedEps(incomeStatement.getEpsDiluted());
        initialPlAnalysis.calculateQuantitiesAsProportionOfRevenues();
    }
}
