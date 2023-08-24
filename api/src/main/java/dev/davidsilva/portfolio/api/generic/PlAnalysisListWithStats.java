package dev.davidsilva.portfolio.api.generic;

import java.util.List;

public record PlAnalysisListWithStats(
        List<PlAnalysisWithCagrs> plAnalysisList,
        PlAnalysisStats plAnalysisStats
) {
}
