package dev.davidsilva.portfolio.api.el;

import dev.davidsilva.portfolio.dbcore.el.ElFinancialReport;
import dev.davidsilva.portfolio.dbcore.el.ElFinancialReportDao;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ElFinancialReportService {
    private final ElFinancialReportDao elFinancialReportDao;

    public List<ElFinancialReport> findAll() {
        return elFinancialReportDao.findAll();
    }


    public List<ElFinancialReport> findAllYearlyOrderByEndDateAsc() {
        return elFinancialReportDao.findAllYearlyOrderByEndDateAsc();
    }
}
