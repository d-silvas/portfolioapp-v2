package dev.davidsilva.portfolio.api.sbux;

import dev.davidsilva.portfolio.api.generic.PlAnalysisWithCagrs;
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
@RequestMapping("sbux/pl-analysis")
@AllArgsConstructor
@Slf4j
public class SbuxPlAnalysisController {
    private final SbuxPlAnalysisService sbuxPlAnalysisService;

    @GetMapping
    public ResponseEntity<List<PlAnalysisWithCagrs>> getAllPlAnalyses() {
        try {
            List<PlAnalysisWithCagrs> plAnalysisList = sbuxPlAnalysisService.findAllYearlyWithCagrs();
            return new ResponseEntity<>(plAnalysisList, HttpStatus.OK);
        } catch (Exception e) {
            log.error("An error occurred while calculating PL Analysis list", e);
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.OK);
        }
    }
}
