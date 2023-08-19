package dev.davidsilva.portfolio.dbcore.el;

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
@Table(name = "el_financial_reports", schema = "public")
public class ElFinancialReport {
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
    private ElIncomeStatement incomeStatement;
}
