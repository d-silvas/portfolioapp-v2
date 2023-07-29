package dev.davidsilva.portfolio.dbcore.sbux;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "sbux_income_statements", schema = "public")
public class SbuxIncomeStatement {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne()
    @JoinColumn(name = "financial_report_id")
    @JsonIgnore
    private SbuxFinancialReport financialReport;

    @Column(name = "revenues_company_operated_stores")
    private Double revenuesCompanyOperatedStores;

    @Column(name = "revenues_licensed_stores")
    private Double revenuesLicensedStores;

    @Column(name = "revenues_other")
    private Double revenuesOther;

    @Column(name = "net_revenues")
    private Double netRevenues;

    @Column(name = "product_and_distribution_costs")
    private Double productAndDistributionCosts;

    @Column(name = "store_operating_expenses")
    private Double storeOperatingExpenses;

    @Column(name = "other_operating_expenses")
    private Double otherOperatingExpenses;

    @Column(name = "depreciation_and_amortization_expenses")
    private Double depreciationAndAmortizationExpenses;

    @Column(name = "general_and_administrative_expenses")
    private Double generalAndAdministrativeExpenses;

    @Column(name = "restructuring_and_impairments")
    private Double restructuringAndImpairments;

    @Column(name = "total_operating_expenses")
    private Double totalOperatingExpenses;

    @Column(name = "income_from_equity_investments")
    private Double incomeFromEquityInvestments;

    @Column(name = "operating_income")
    private Double operatingIncome;

    @Column(name = "acquisitions_and_divestitures")
    private Double acquisitionsAndDivestitures;

    @Column(name = "interest_income_and_other")
    private Double interestIncomeAndOther;

    @Column(name = "interest_expense")
    private Double interestExpense;

    @Column(name = "earnings_before_income_taxes")
    private Double earningsBeforeIncomeTaxes;

    @Column(name = "income_tax_expense")
    private Double incomeTaxExpense;

    @Column(name = "net_earnings")
    private Double netEarnings;

    @Column(name = "eps_basic")
    private Double epsBasic;

    @Column(name = "eps_diluted")
    private Double epsDiluted;

    @Column(name = "weighted_average_shares_outstanding_basic")
    private Double weightedAverageSharesOutstandingBasic;

    @Column(name = "weighted_average_shares_outstanding_diluted")
    private Double weightedAverageSharesOutstandingDiluted;
}
