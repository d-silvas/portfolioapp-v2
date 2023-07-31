package dev.davidsilva.portfolio.dbcore.sbux;

import dev.davidsilva.portfolio.dbcore.financialreport.FinancialReportPeriod;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "sbux_financial_reports", schema = "public")
public class SbuxFinancialReport {
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

    @OneToOne(fetch = FetchType.EAGER, mappedBy = "financialReport")
    private SbuxIncomeStatement incomeStatement;

    @OneToOne(fetch = FetchType.EAGER, mappedBy = "financialReport")
    private SbuxBalanceSheet balanceSheet;

    @OneToOne(fetch = FetchType.EAGER, mappedBy = "financialReport")
    private SbuxSegmentInfo segmentInfo;
}
