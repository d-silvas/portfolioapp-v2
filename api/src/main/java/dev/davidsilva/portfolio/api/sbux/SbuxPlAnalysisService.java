package dev.davidsilva.portfolio.api.sbux;

import dev.davidsilva.portfolio.api.generic.PlAnalysis;
import dev.davidsilva.portfolio.api.generic.PlAnalysisService;
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

    public List<PlAnalysis> findAllYearly() throws Exception {
        List<SbuxFinancialReport> financialReports = sbuxFinancialReportService.findAllYearlyOrderByEndDateAsc();
        List<PlAnalysis> plAnalysisList = new ArrayList<>();
        for (SbuxFinancialReport financialReport : financialReports) {
            SbuxIncomeStatement incomeStatement = financialReport.getIncomeStatement();

            PlAnalysis plAnalysis = new PlAnalysis();
            plAnalysis.setCalendarYear(financialReport.getCalendarYear());
            plAnalysis.setPeriod(financialReport.getPeriod());
            plAnalysis.setNetRevenue(incomeStatement.getNetRevenues());
            Double cogs = incomeStatement.getProductAndDistributionCosts() +
                    incomeStatement.getStoreOperatingExpenses() +
                    incomeStatement.getOtherOperatingExpenses() +
                    incomeStatement.getDepreciationAndAmortizationExpenses();
            plAnalysis.setCogs(cogs);
            plAnalysis.setGrossProfit(incomeStatement.getNetRevenues() - cogs);
            plAnalysis.setSga(incomeStatement.getGeneralAndAdministrativeExpenses() + incomeStatement.getRestructuringAndImpairments());
            plAnalysis.setEbitda(incomeStatement.getOperatingIncome() + incomeStatement.getDepreciationAndAmortizationExpenses());
            plAnalysis.setEbit(incomeStatement.getOperatingIncome());
            plAnalysis.setEbt(incomeStatement.getEarningsBeforeIncomeTaxes());
            plAnalysis.setTaxPaid(incomeStatement.getIncomeTaxExpense());
            plAnalysis.setNetIncome(incomeStatement.getNetEarnings());
            plAnalysis.calculateQuantitiesAsProportionOfRevenues();

            plAnalysisList.add(plAnalysis);
        }

        return plAnalysisService.calculateCagrs(plAnalysisList);
    }
}
