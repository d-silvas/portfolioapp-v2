package dev.davidsilva.portfolio.api.sbux;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("sbux/debt-analysis")
@AllArgsConstructor
@Slf4j
public class SbuxDebtAnalysisController {
    private final SbuxDebtAnalysisService sbuxDebtAnalysisService;

    @GetMapping
    public ResponseEntity<List<SbuxDebtAnalysis>> getSbuxDebtAnalyses() {
        try {
            List<SbuxDebtAnalysis> debtAnalysisList = sbuxDebtAnalysisService.findAllYearly();
            return new ResponseEntity<>(debtAnalysisList, HttpStatus.OK);
        } catch (Exception e) {
            log.error("Error on GET /sbux/debt-analysis", e);
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.OK);
        }
    }
}
