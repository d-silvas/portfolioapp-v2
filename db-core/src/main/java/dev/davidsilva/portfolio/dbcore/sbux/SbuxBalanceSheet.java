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
@Table(name = "sbux_balance_sheets", schema = "public")
public class SbuxBalanceSheet {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne()
    @JoinColumn(name = "financial_report_id")
    @JsonIgnore
    private SbuxFinancialReport financialReport;

    @Column(name = "cash_and_cash_equivalents")
    private Double cashAndCashEquivalents;

    @Column(name = "short_term_investments")
    private Double shortTermInvestments;

    @Column(name = "accounts_receivable_net")
    private Double accountsReceivableNet;

    @Column(name = "inventories")
    private Double inventories;

    @Column(name = "prepaid_expenses_and_other_current_assets")
    private Double prepaidExpensesAndOtherCurrentAssets;

    @Column(name = "total_current_assets")
    private Double totalCurrentAssets;

    @Column(name = "long_term_investments")
    private Double longTermInvestments;

    @Column(name = "equity_investments")
    private Double equityInvestments;

    @Column(name = "ppe_net")
    private Double ppeNet;

    @Column(name = "operating_lease_right_of_use_asset")
    private Double operatingLeaseRightOfUseAsset;

    @Column(name = "deferred_income_taxes_net")
    private Double deferredIncomeTaxesNet;

    @Column(name = "other_long_term_assets")
    private Double otherLongTermAssets;

    @Column(name = "other_intangible_assets")
    private Double otherIntangibleAssets;

    @Column(name = "goodwill")
    private Double goodwill;

    @Column(name = "total_assets")
    private Double totalAssets;

    @Column(name = "accounts_payable")
    private Double accountsPayable;

    @Column(name = "accrued_liabilities")
    private Double accruedLiabilities;

    @Column(name = "accrued_payroll_and_benefits")
    private Double accruedPayrollAndBenefits;

    @Column(name = "income_taxes_payable")
    private Double incomeTaxesPayable;

    @Column(name = "current_portion_of_operating_lease_liability")
    private Double currentPortionOfOperatingLeaseLiability;

    @Column(name = "stored_value_card_liab_and_current_portion_of_def_rev")
    private Double storedValueCardLiabilityAndCurrentPortionOfDeferredRevenue;

    @Column(name = "short_term_debt")
    private Double shortTermDebt;

    @Column(name = "current_portion_of_long_term_debt")
    private Double currentPortionOfLongTermDebt;

    @Column(name = "total_current_liabilities")
    private Double totalCurrentLiabilities;

    @Column(name = "long_term_debt")
    private Double longTermDebt;

    @Column(name = "operating_lease_liability")
    private Double operatingLeaseLiability;

    @Column(name = "deferred_revenue")
    private Double deferredRevenue;

    @Column(name = "other_long_term_liabilities")
    private Double otherLongTermLiabilities;

    @Column(name = "total_liabilities")
    private Double totalLiabilities;

    @Column(name = "common_stock")
    private Double commonStock;

    @Column(name = "additional_paid_in_capital")
    private Double additionalPaidInCapital;

    @Column(name = "retained_earnings")
    private Double retainedEarnings;

    @Column(name = "accumulated_other_comprehensive_income")
    private Double accumulatedOtherComprehensiveIncome;

    @Column(name = "total_shareholders_equity")
    private Double totalShareholdersEquity;
}
