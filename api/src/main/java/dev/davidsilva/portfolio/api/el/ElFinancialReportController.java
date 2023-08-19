package dev.davidsilva.portfolio.api.el;

import dev.davidsilva.portfolio.dbcore.el.ElFinancialReport;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("el/financial-reports")
@AllArgsConstructor
public class ElFinancialReportController {
    private final ElFinancialReportService elFinancialReportService;

    @GetMapping
    public ResponseEntity<List<ElFinancialReport>> getFinancialReports() {
        List<ElFinancialReport> elFinancialReports = elFinancialReportService.findAll();
        return new ResponseEntity<>(elFinancialReports, HttpStatus.OK);
    }
}
