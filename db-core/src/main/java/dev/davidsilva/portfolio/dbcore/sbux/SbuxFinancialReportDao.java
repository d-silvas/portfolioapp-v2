package dev.davidsilva.portfolio.dbcore.sbux;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SbuxFinancialReportDao extends JpaRepository<SbuxFinancialReport, Integer> {
    @Query("SELECT r from SbuxFinancialReport r WHERE r.period = dev.davidsilva.portfolio" +
            ".dbcore.financialreport.FinancialReportPeriod.FULL ORDER BY r.endDate ASC")
    List<SbuxFinancialReport> findAllYearlyOrderByEndDateAsc();
}
