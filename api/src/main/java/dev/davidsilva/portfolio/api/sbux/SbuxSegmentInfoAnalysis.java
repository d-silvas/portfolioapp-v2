package dev.davidsilva.portfolio.api.sbux;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import dev.davidsilva.portfolio.dbcore.financialreport.FinancialReportPeriod;
import dev.davidsilva.portfolio.dbcore.sbux.SbuxFinancialReport;
import dev.davidsilva.portfolio.dbcore.sbux.SbuxIncomeStatement;
import dev.davidsilva.portfolio.dbcore.sbux.SbuxSegmentInfo;
import lombok.Getter;
import lombok.Setter;

@JsonPropertyOrder(value = {
        "calendarYear",
        "period",
        "totalRevenues",
        "totalRevenuesDelta",
        "totalRevenuesCagr5",
        "totalNumStores",
        "totalNumStoresDelta",
        "totalNumStoresCagr5",
        "northAmericaRevenues",
        "northAmericaRevenuesAsProportionOfTotalRevenues",
        "northAmericaRevenuesDelta",
        "northAmericaRevenuesCagr5",
        "northAmericaNumStores",
        "northAmericaNumStoresAsProportionOfTotalStores",
        "northAmericaNumStoresDelta",
        "northAmericaNumStoresCgr5",
        "northAmericaRevenuePerStore",
        "northAmericaRevenuePerStoreDelta",
        "northAmericaRevenuePerStoreCagr5",
        "internationalRevenues",
        "internationalRevenuesAsProportionOfTotalRevenues",
        "internationalRevenuesDelta",
        "internationalRevenuesCagr5",
        "internationalNumStores",
        "internationalNumStoresAsProportionOfTotalStores",
        "internationalNumStoresDelta",
        "internationalNumStoresCagr5",
        "internationalRevenuePerStore",
        "internationalRevenuePerStoreDelta",
        "internationalRevenuePerStoreCagr5",
        "channelDevelopmentRevenues",
        "channelDevelopmentRevenuesAsProportionOfTotalRevenues",
        "channelDevelopmentRevenuesDelta",
        "channelDevelopmentRevenuesCagr5",
        "otherRevenues",
        "otherRevenuesAsProportionOfTotalRevenues"
})
public class SbuxSegmentInfoAnalysis {
    @Getter
    private final Double totalRevenues;
    @Getter
    private final Double totalNumStores;
    @Getter
    private final Double northAmericaRevenues;
    @Getter
    private final Double northAmericaRevenuesAsProportionOfTotalRevenues;
    @Getter
    private final Double northAmericaNumStores;
    @Getter
    private final Double northAmericaNumStoresAsProportionOfTotalStores;
    @Getter
    private final Double northAmericaRevenuePerStore;
    @Getter
    private final Double internationalRevenues;
    @Getter
    private final Double internationalRevenuesAsProportionOfTotalRevenues;
    @Getter
    private final Double internationalNumStores;
    @Getter
    private final Double internationalNumStoresAsProportionOfTotalStores;
    @Getter
    private final Double internationalRevenuePerStore;
    @Getter
    private final Double channelDevelopmentRevenues;
    @Getter
    private final Double channelDevelopmentRevenuesAsProportionOfTotalRevenues;
    @Getter
    private final Double otherRevenues;
    @Getter
    private final Double otherRevenuesAsProportionOfTotalRevenues;
    @Getter
    private final FinancialReportPeriod period;
    @Getter
    private final Integer calendarYear;
    @Getter
    @Setter
    private Double totalRevenuesDelta;
    @Getter
    @Setter
    private Double totalRevenuesCagr5;
    @Getter
    @Setter
    private Double totalNumStoresDelta;
    @Getter
    @Setter
    private Double totalNumStoresCagr5;
    @Getter
    @Setter
    private Double northAmericaRevenuesDelta;
    @Getter
    @Setter
    private Double northAmericaRevenuesCagr5;
    @Getter
    @Setter
    private Double northAmericaNumStoresDelta;
    @Getter
    @Setter
    private Double northAmericaNumStoresCagr5;
    @Getter
    @Setter
    private Double northAmericaRevenuePerStoreDelta;
    @Getter
    @Setter
    private Double northAmericaRevenuePerStoreCagr5;
    @Getter
    @Setter
    private Double internationalRevenuesDelta;
    @Getter
    @Setter
    private Double internationalRevenuesCagr5;
    @Getter
    @Setter
    private Double internationalNumStoresDelta;
    @Getter
    @Setter
    private Double internationalNumStoresCagr5;
    @Getter
    @Setter
    private Double internationalRevenuePerStoreDelta;
    @Getter
    @Setter
    private Double internationalRevenuePerStoreCagr5;
    @Getter
    @Setter
    private Double channelDevelopmentRevenuesDelta;
    @Getter
    @Setter
    private Double channelDevelopmentRevenuesCagr5;

    SbuxSegmentInfoAnalysis(SbuxFinancialReport financialReport) {
        SbuxIncomeStatement incomeStatement = financialReport.getIncomeStatement();
        SbuxSegmentInfo segmentInfo = financialReport.getSegmentInfo();
        calendarYear = financialReport.getCalendarYear();
        period = financialReport.getPeriod();
        totalRevenues = incomeStatement.getNetRevenues();
        totalNumStores = segmentInfo.getNorthAmericaNumStores() + segmentInfo.getInternationalNumStores();
        northAmericaRevenues = segmentInfo.getNorthAmericaRevenues();
        northAmericaRevenuesAsProportionOfTotalRevenues = northAmericaRevenues / totalRevenues;
        northAmericaNumStores = segmentInfo.getNorthAmericaNumStores();
        northAmericaNumStoresAsProportionOfTotalStores = northAmericaNumStores / totalNumStores;
        northAmericaRevenuePerStore = northAmericaRevenues / northAmericaNumStores;
        internationalRevenues = segmentInfo.getInternationalRevenues();
        internationalRevenuesAsProportionOfTotalRevenues = internationalRevenues / totalRevenues;
        internationalNumStores = segmentInfo.getInternationalNumStores();
        internationalNumStoresAsProportionOfTotalStores = internationalNumStores / totalNumStores;
        internationalRevenuePerStore = internationalRevenues / internationalNumStores;
        channelDevelopmentRevenues = segmentInfo.getChannelDevelopmentRevenues();
        channelDevelopmentRevenuesAsProportionOfTotalRevenues = channelDevelopmentRevenues / totalRevenues;
        otherRevenues = segmentInfo.getOtherRevenues();
        otherRevenuesAsProportionOfTotalRevenues = otherRevenues / totalRevenues;
    }

}
