package dev.davidsilva.portfolio.dbcore.financialreport;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.stream.Stream;

public enum FinancialReportPeriod {
    // TODO half year
    FULL("full"), Q1("q1"), Q2("q2"), Q3("q3"), Q4("q4"), TTM("ttm");

    private final String period;

    FinancialReportPeriod(String period) {
        this.period = period;
    }

    public String getPeriod() {
        return period;
    }

    @Converter(autoApply = true)
    public static class FinancialStatementPeriodConverter implements AttributeConverter<FinancialReportPeriod,
                String> {
        @Override
        public String convertToDatabaseColumn(FinancialReportPeriod financialReportPeriod) {
            if (financialReportPeriod == null) {
                return null;
            }
            return financialReportPeriod.getPeriod();
        }

        @Override
        public FinancialReportPeriod convertToEntityAttribute(String period) {
            if (period == null) {
                return null;
            }
            return Stream.of(FinancialReportPeriod.values())
                    .filter(a -> a.getPeriod().equals(period))
                    .findFirst()
                    .orElseThrow(IllegalArgumentException::new);
        }
    }
}