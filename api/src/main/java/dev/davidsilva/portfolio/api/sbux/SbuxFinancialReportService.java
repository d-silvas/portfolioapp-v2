package dev.davidsilva.portfolio.api.sbux;

import dev.davidsilva.portfolio.dbcore.sbux.SbuxFinancialReport;
import dev.davidsilva.portfolio.dbcore.sbux.SbuxFinancialReportDao;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SbuxFinancialReportService {
    private final SbuxFinancialReportDao sbuxFinancialReportDao;

    public List<SbuxFinancialReport> findAll() {
        return sbuxFinancialReportDao.findAll();
    }


    public List<SbuxFinancialReport> findAllYearlyOrderByEndDateAsc() {
        return sbuxFinancialReportDao.findAllYearlyOrderByEndDateAsc();
    }
}
