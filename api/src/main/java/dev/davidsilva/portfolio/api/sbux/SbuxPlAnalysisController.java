package dev.davidsilva.portfolio.api.sbux;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("sbux/pl-analysis")
@AllArgsConstructor
public class SbuxPlAnalysisController {
    private final SbuxPlAnalysisService sbuxPlAnalysisService;

    @GetMapping
    public ResponseEntity<List<SbuxPlAnalysis>> getAllPlAnalyses() {
        List<SbuxPlAnalysis> plAnalysisList = sbuxPlAnalysisService.findAllYearly();
        return new ResponseEntity<>(plAnalysisList, HttpStatus.OK);
    }
}
