package dev.davidsilva.portfolio.api.utils;

import org.springframework.stereotype.Service;

@Service
public class CalculationsService {
    public Double getDelta(Double previousValue, Double currentValue) {
        return (currentValue - previousValue) / previousValue;
    }

    public Double getCagr5(Double previousValue, Double currentValue) {
        // TODO test NAN/Infinites
        double power = Math.pow(currentValue / previousValue, 1.0 / 5);
        if (Double.isNaN(power) || Double.isInfinite(power)) {
            return null;
        }
        return power - 1;
    }

    public Double getCagr10(Double previousValue, Double currentValue) {
        double power = Math.pow(currentValue / previousValue, 1.0 / 10);
        if (Double.isNaN(power) || Double.isInfinite(power)) {
            return null;
        }
        return power - 1;
    }
}
