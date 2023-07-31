package dev.davidsilva.portfolio.api.sbux;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("sbux/segment-info-analysis")
@AllArgsConstructor
public class SbuxSegmentInfoAnalysisController {
    private final SbuxSegmentInfoAnalysisService sbuxSegmentInfoAnalysisService;

    @GetMapping
    public ResponseEntity<List<SbuxSegmentInfoAnalysis>> getSbuxSegmentInfoAnalyses() {
        List<SbuxSegmentInfoAnalysis> segmentInfoAnalysisList = sbuxSegmentInfoAnalysisService.findAllYearly();
        return new ResponseEntity<>(segmentInfoAnalysisList, HttpStatus.OK);
    }
}
