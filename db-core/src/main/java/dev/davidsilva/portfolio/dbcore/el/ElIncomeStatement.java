package dev.davidsilva.portfolio.dbcore.el;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "el_income_statements", schema = "public")
public class ElIncomeStatement {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne()
    @JoinColumn(name = "financial_report_id")
    @JsonIgnore
    private ElFinancialReport financialReport;

    @Column(name = "net_sales")
    private Double netSales;

    @Column(name = "cogs")
    private Double cogs;

    @Column(name = "gross_profit")
    private Double grossProfit;

    @Column(name = "sga")
    private Double sga;

    @Column(name = "restructuring_and_other_charges")
    private Double restructuringAndOtherCharges;

    @Column(name = "goodwill_impairment")
    private Double goodwillImpairment;

    @Column(name = "impairment_of_other_intangible_and_long_lived_assets")
    private Double impairmentOfOtherIntangibleAndLongLivedAssets;

    @Column(name = "total_operating_expenses")
    private Double totalOperatingExpenses;

    @Column(name = "operating_income")
    private Double operatingIncome;

    @Column(name = "interest_expense")
    private Double interestExpense;

    @Column(name = "interest_income_and_investment_income_net")
    private Double interestIncomeAndInvestmentIncomeNet;

    @Column(name = "other_components_of_net_periodic_benefit_cost")
    private Double otherComponentsOfNetPeriodicBenefitCost;

    @Column(name = "other_income_net")
    private Double otherIncomeNet;

    @Column(name = "earnings_before_income_taxes")
    private Double earningsBeforeIncomeTaxes;

    @Column(name = "provision_for_income_taxes")
    private Double provisionForIncomeTaxes;

    @Column(name = "net_earnings")
    private Double netEarnings;

    @Column(name = "net_earnings_attributable_to_el")
    private Double netEarningsAttributableToEl;

    @Column(name = "basic_eps_attributable_to_el")
    private Double basicEpsAttributableToEl;

    @Column(name = "diluted_eps_attributable_to_el")
    private Double dilutedEpsAttributableToEl;

    @Column(name = "weighted_avg_common_shares_outstanding_basic")
    private Double weightedAverageCommonSharesOutstandingBasic;

    @Column(name = "weighted_avg_common_shares_outstanding_diluted")
    private Double weightedAverageCommonSharesOutstandingDiluted;
}
