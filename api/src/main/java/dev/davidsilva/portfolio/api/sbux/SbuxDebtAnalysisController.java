package dev.davidsilva.portfolio.api.sbux;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("sbux/debt-analysis")
@AllArgsConstructor
public class SbuxDebtAnalysisController {
    private final SbuxDebtAnalysisService sbuxDebtAnalysisService;

    @GetMapping
    public ResponseEntity<List<SbuxDebtAnalysis>> getSbuxDebtAnalyses() {
        List<SbuxDebtAnalysis> debtAnalysisList = sbuxDebtAnalysisService.findAllYearly();
        return new ResponseEntity<>(debtAnalysisList, HttpStatus.OK);
    }
}
