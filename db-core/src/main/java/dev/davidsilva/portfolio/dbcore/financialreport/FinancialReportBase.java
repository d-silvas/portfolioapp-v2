package dev.davidsilva.portfolio.dbcore.financialreport;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

/**
 * TODO USE
 */
@NoArgsConstructor
@Getter
@Setter
public class FinancialReportBase {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "period")
    private FinancialReportPeriod period;

    @Column(name = "calendar_year")
    private Integer calendarYear;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "publication_date")
    private LocalDate publicationDate;
}
