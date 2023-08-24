package dev.davidsilva.portfolio.api.math;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Getter;
import org.apache.commons.math3.stat.descriptive.DescriptiveStatistics;

import java.util.List;

@JsonPropertyOrder({
        "mean",
        "median",
        "variance",
        "percentile25",
        "percentile50",
        "percentile75",
        "min",
        "max"
})
@Getter
public class Stats {
    private final Double mean;
    private final Double median;
    private final Double variance;
    private final Double percentile25;
    private final Double percentile75;
    private final Double min;
    private final Double max;

    public Stats(List<Double> data) {
        this(data.stream().mapToDouble(Double::doubleValue).toArray());
    }

    public Stats(double[] data) {
        DescriptiveStatistics descriptiveStatistics = new DescriptiveStatistics(data);
        this.mean = descriptiveStatistics.getMean();
        this.median = descriptiveStatistics.getPercentile(50);
        this.variance = descriptiveStatistics.getVariance();
        this.percentile25 = descriptiveStatistics.getPercentile(25);
        this.percentile75 = descriptiveStatistics.getPercentile(75);
        this.min = descriptiveStatistics.getMin();
        this.max = descriptiveStatistics.getMax();
    }
}
