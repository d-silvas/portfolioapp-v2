package dev.davidsilva.portfolio.dbcore.el;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ElFinancialReportDao extends JpaRepository<ElFinancialReport, Integer> {
    @Query("SELECT r from ElFinancialReport r WHERE r.period = dev.davidsilva.portfolio" +
            ".dbcore.financialreport.FinancialReportPeriod.FULL ORDER BY r.endDate ASC")
    List<ElFinancialReport> findAllYearlyOrderByEndDateAsc();
}
