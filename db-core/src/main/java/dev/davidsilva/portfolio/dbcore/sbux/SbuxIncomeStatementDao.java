package dev.davidsilva.portfolio.dbcore.sbux;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SbuxIncomeStatementDao extends JpaRepository<SbuxIncomeStatement, Integer> {
}
