package dev.davidsilva.portfolio.api.sbux;

import dev.davidsilva.portfolio.dbcore.sbux.SbuxFinancialReport;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("sbux/financial-reports")
@AllArgsConstructor
public class SbuxFinancialReportController {
    private final SbuxFinancialReportService sbuxFinancialReportService;

    @GetMapping
    public ResponseEntity<List<SbuxFinancialReport>> getFinancialReports() {
        List<SbuxFinancialReport> sbuxFinancialReports = sbuxFinancialReportService.findAll();
        return new ResponseEntity<>(sbuxFinancialReports, HttpStatus.OK);
    }
}
