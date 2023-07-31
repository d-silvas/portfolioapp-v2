package dev.davidsilva.portfolio.api.sbux;

import dev.davidsilva.portfolio.api.utils.CalculationsService;
import dev.davidsilva.portfolio.dbcore.sbux.SbuxFinancialReport;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class SbuxSegmentInfoAnalysisService {
    private final SbuxFinancialReportService sbuxFinancialReportService;
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

    public List<SbuxSegmentInfoAnalysis> findAllYearly() {
        List<SbuxFinancialReport> financialReports = sbuxFinancialReportService.findAllYearlyOrderByEndDateAsc();
        List<SbuxSegmentInfoAnalysis> segmentInfoAnalysisList = new ArrayList<>();
        for (int index = 0; index < financialReports.size(); index++) {
            SbuxFinancialReport financialReport = financialReports.get(index);
            if (financialReport.getIncomeStatement() == null || financialReport.getSegmentInfo() == null) {
                // TODO this may mess up delta/cagr calculations
                continue;
            }
            SbuxSegmentInfoAnalysis segmentInfoAnalysis = new SbuxSegmentInfoAnalysis(financialReport);
            if (segmentInfoAnalysisList.size() >= 1) {
                SbuxSegmentInfoAnalysis previousSegmentInfoAnalysis = segmentInfoAnalysisList.get(segmentInfoAnalysisList.size() - 1);
                segmentInfoAnalysis.setTotalRevenuesDelta(getDelta(previousSegmentInfoAnalysis.getTotalRevenues(), segmentInfoAnalysis.getTotalRevenues()));
                segmentInfoAnalysis.setTotalNumStoresDelta(getDelta(previousSegmentInfoAnalysis.getTotalNumStores(), segmentInfoAnalysis.getTotalNumStores()));
                segmentInfoAnalysis.setNorthAmericaRevenuesDelta(getDelta(previousSegmentInfoAnalysis.getNorthAmericaRevenues(), segmentInfoAnalysis.getNorthAmericaRevenues()));
                segmentInfoAnalysis.setNorthAmericaNumStoresDelta(getDelta(previousSegmentInfoAnalysis.getNorthAmericaNumStores(), segmentInfoAnalysis.getNorthAmericaNumStores()));
                segmentInfoAnalysis.setNorthAmericaRevenuePerStoreDelta(getDelta(previousSegmentInfoAnalysis.getNorthAmericaRevenuePerStore(), segmentInfoAnalysis.getNorthAmericaRevenuePerStore()));
                segmentInfoAnalysis.setInternationalRevenuesDelta(getDelta(previousSegmentInfoAnalysis.getInternationalRevenues(), segmentInfoAnalysis.getInternationalRevenues()));
                segmentInfoAnalysis.setInternationalNumStoresDelta(getDelta(previousSegmentInfoAnalysis.getInternationalNumStores(), segmentInfoAnalysis.getInternationalNumStores()));
                segmentInfoAnalysis.setInternationalRevenuePerStoreDelta(getDelta(previousSegmentInfoAnalysis.getInternationalRevenuePerStore(), segmentInfoAnalysis.getInternationalRevenuePerStore()));
                segmentInfoAnalysis.setChannelDevelopmentRevenuesDelta(getDelta(previousSegmentInfoAnalysis.getChannelDevelopmentRevenues(), segmentInfoAnalysis.getChannelDevelopmentRevenues()));
            }
            if (segmentInfoAnalysisList.size() >= 5) {
                SbuxSegmentInfoAnalysis previousSegmentInfoAnalysis = segmentInfoAnalysisList.get(segmentInfoAnalysisList.size() - 5);
                segmentInfoAnalysis.setTotalRevenuesCagr5(getCagr5(previousSegmentInfoAnalysis.getTotalRevenues(), segmentInfoAnalysis.getTotalRevenues()));
                segmentInfoAnalysis.setTotalNumStoresCagr5(getCagr5(previousSegmentInfoAnalysis.getTotalNumStores(), segmentInfoAnalysis.getTotalNumStores()));
                segmentInfoAnalysis.setNorthAmericaRevenuesCagr5(getCagr5(previousSegmentInfoAnalysis.getNorthAmericaRevenues(), segmentInfoAnalysis.getNorthAmericaRevenues()));
                segmentInfoAnalysis.setNorthAmericaNumStoresCagr5(getCagr5(previousSegmentInfoAnalysis.getNorthAmericaNumStores(), segmentInfoAnalysis.getNorthAmericaNumStores()));
                segmentInfoAnalysis.setNorthAmericaRevenuePerStoreCagr5(getCagr5(previousSegmentInfoAnalysis.getNorthAmericaRevenuePerStore(), segmentInfoAnalysis.getNorthAmericaRevenuePerStore()));
                segmentInfoAnalysis.setInternationalRevenuesCagr5(getCagr5(previousSegmentInfoAnalysis.getInternationalRevenues(), segmentInfoAnalysis.getInternationalRevenues()));
                segmentInfoAnalysis.setInternationalNumStoresCagr5(getCagr5(previousSegmentInfoAnalysis.getInternationalNumStores(), segmentInfoAnalysis.getInternationalNumStores()));
                segmentInfoAnalysis.setInternationalRevenuePerStoreCagr5(getCagr5(previousSegmentInfoAnalysis.getInternationalRevenuePerStore(), segmentInfoAnalysis.getInternationalRevenuePerStore()));
                segmentInfoAnalysis.setChannelDevelopmentRevenuesCagr5(getCagr5(previousSegmentInfoAnalysis.getChannelDevelopmentRevenues(), segmentInfoAnalysis.getChannelDevelopmentRevenues()));
            }
            segmentInfoAnalysisList.add(segmentInfoAnalysis);
        }
        return segmentInfoAnalysisList;
    }
}
