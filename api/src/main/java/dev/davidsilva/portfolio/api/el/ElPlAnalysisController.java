package dev.davidsilva.portfolio.api.el;

import dev.davidsilva.portfolio.api.generic.PlAnalysisListWithStats;
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
@RequestMapping("el/pl-analysis")
@AllArgsConstructor
@Slf4j
public class ElPlAnalysisController {
    private final ElPlAnalysisService elPlAnalysisService;

    @GetMapping
    public ResponseEntity<List<PlAnalysisWithCagrs>> getAllPlAnalyses() {
        try {
            List<PlAnalysisWithCagrs> plAnalysisList = elPlAnalysisService.findAllYearly();
            return new ResponseEntity<>(plAnalysisList, HttpStatus.OK);
        } catch (Exception e) {
            log.error("An error occurred while calculating PL Analysis list", e);
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.OK);
        }
    }

    // TODO turn this into query parameter
    @GetMapping("/with-stats")
    public ResponseEntity<PlAnalysisListWithStats> getAllPlAnalysesWithStats() {
        try {
            PlAnalysisListWithStats plAnalysisListWithStats = elPlAnalysisService.findAllYearlyWithStats();
            return new ResponseEntity<>(plAnalysisListWithStats, HttpStatus.OK);
        } catch (Exception e) {
            log.error("An error occurred while calculating PL Analysis list", e);
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
    }
}
