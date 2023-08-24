package dev.davidsilva.portfolio.api.math;

import org.springframework.stereotype.Service;

@Service
public class CalculationsService {
    private static boolean isNull(Double quantity) {
        return quantity == null;
    }

    private static boolean isZero(Double quantity) {
        return quantity == 0;
    }

    public Double getDelta(Double previousValue, Double currentValue) {
        if (isNull(previousValue) || isNull(currentValue) || isZero(currentValue)) {
            return null;
        }
        return (currentValue - previousValue) / previousValue;
    }

    public Double getCagr5(Double previousValue, Double currentValue) {
        if (isNull(previousValue) || isNull(currentValue)) {
            return null;
        }
        // TODO test NAN/Infinites
        double power = Math.pow(currentValue / previousValue, 1.0 / 5);
        if (Double.isNaN(power) || Double.isInfinite(power)) {
            return null;
        }
        return power - 1;
    }

    public Double getCagr10(Double previousValue, Double currentValue) {
        if (isNull(previousValue) || isNull(currentValue)) {
            return null;
        }
        double power = Math.pow(currentValue / previousValue, 1.0 / 10);
        if (Double.isNaN(power) || Double.isInfinite(power)) {
            return null;
        }
        return power - 1;
    }
}
