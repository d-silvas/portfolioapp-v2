package dev.davidsilva.portfolio.api.generic;

public class PlAnalysisListOutOfOrderException extends Exception {
    public PlAnalysisListOutOfOrderException(String message) {
        super(message);
    }

    public PlAnalysisListOutOfOrderException(String message, Throwable error) {
        super(message, error);
    }
}
