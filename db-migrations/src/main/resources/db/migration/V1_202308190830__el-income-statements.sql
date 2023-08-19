CREATE TABLE public.el_income_statements (
    id SERIAL PRIMARY KEY,
    financial_report_id INTEGER UNIQUE,
    net_sales FLOAT8,
    cogs FLOAT8,
    gross_profit FLOAT8,
    sga FLOAT8,
    restructuring_and_other_charges FLOAT8,
    goodwill_impairment FLOAT8,
    impairment_of_other_intangible_and_long_lived_assets FLOAT8,
    total_operating_expenses FLOAT8,
    operating_income FLOAT8,
    interest_expense FLOAT8,
    interest_income_and_investment_income_net FLOAT8,
    other_components_of_net_periodic_benefit_cost FLOAT8,
    other_income_net FLOAT8,
    earnings_before_income_taxes FLOAT8,
    provision_for_income_taxes FLOAT8,
    net_earnings FLOAT8,
    -- Ignoring some noncontrolling interest quantities
    net_earnings_attributable_to_el FLOAT8,
    basic_eps_attributable_to_el FLOAT8,
    diluted_eps_attributable_to_el FLOAT8,
    weighted_avg_common_shares_outstanding_basic FLOAT8,
    weighted_avg_common_shares_outstanding_diluted FLOAT8,
    CONSTRAINT fk_financial_report
        FOREIGN KEY(financial_report_id)
        REFERENCES el_financial_reports(id)
);

INSERT INTO public.el_income_statements (
    id,
    financial_report_id,
    net_sales,
    cogs,
    gross_profit,
    sga,
    restructuring_and_other_charges,
    goodwill_impairment,
    impairment_of_other_intangible_and_long_lived_assets,
    total_operating_expenses,
    operating_income,
    interest_expense,
    interest_income_and_investment_income_net,
    other_components_of_net_periodic_benefit_cost,
    other_income_net,
    earnings_before_income_taxes,
    provision_for_income_taxes,
    net_earnings,
    net_earnings_attributable_to_el,
    basic_eps_attributable_to_el,
    diluted_eps_attributable_to_el,
    weighted_avg_common_shares_outstanding_basic,
    weighted_avg_common_shares_outstanding_diluted
) VALUES (
    1, -- id
    1, -- financial_report_id
    15910 * 1000000, -- net_sales
    4564 * 1000000, -- cogs
    11346 * 1000000, -- gross_profit
    9575 * 1000000, -- sga
    55 * 1000000, -- restructuring_and_other_charges
    0 * 1000000, -- goodwill_impairment
    207 * 1000000, -- impairment_of_other_intangible_and_long_lived_assets
    9837 * 1000000, -- total_operating_expenses
    1509 * 1000000, -- operating_income
    255 * 1000000, -- interest_expense
    131 * 1000000, -- interest_income_and_investment_income_net
    -12 * 1000000, -- other_components_of_net_periodic_benefit_cost
    0 * 1000000, -- other_income_net
    1397 * 1000000, -- earnings_before_income_taxes
    387 * 1000000, -- provision_for_income_taxes
    1010 * 1000000, -- net_earnings
    1006 * 1000000, -- net_earnings_attributable_to_el
    2.81, -- basic_eps_attributable_to_el
    2.79, -- diluted_eps_attributable_to_el
    357.9 * 1000000, -- weighted_avg_common_shares_outstanding_basic
    360.9 * 1000000 -- weighted_avg_common_shares_outstanding_diluted
), (
    2, -- id
    2, -- financial_report_id
    17737 * 1000000, -- net_sales
    4305 * 1000000, -- cogs
    13432 * 1000000, -- gross_profit
    9888 * 1000000, -- sga
    133 * 1000000, -- restructuring_and_other_charges
    0 * 1000000, -- goodwill_impairment
    241 * 1000000, -- impairment_of_other_intangible_and_long_lived_assets
    10262 * 1000000, -- total_operating_expenses
    3170 * 1000000, -- operating_income
    167 * 1000000, -- interest_expense
    30 * 1000000, -- interest_income_and_investment_income_net
    -2 * 1000000, -- other_components_of_net_periodic_benefit_cost
    1 * 1000000, -- other_income_net
    3036 * 1000000, -- earnings_before_income_taxes
    628 * 1000000, -- provision_for_income_taxes
    2408 * 1000000, -- net_earnings
    2390 * 1000000, -- net_earnings_attributable_to_el
    6.64, -- basic_eps_attributable_to_el
    6.55, -- diluted_eps_attributable_to_el
    360.0 * 1000000, -- weighted_avg_common_shares_outstanding_basic
    364.9 * 1000000 -- weighted_avg_common_shares_outstanding_diluted
), (
    3, -- id
    3, -- financial_report_id
    16215 * 1000000, -- net_sales
    3834 * 1000000, -- cogs
    12381 * 1000000, -- gross_profit
    9371 * 1000000, -- sga
    204 * 1000000, -- restructuring_and_other_charges
    54 * 1000000, -- goodwill_impairment
    134 * 1000000, -- impairment_of_other_intangible_and_long_lived_assets
    9763 * 1000000, -- total_operating_expenses
    2618 * 1000000, -- operating_income
    173 * 1000000, -- interest_expense
    51 * 1000000, -- interest_income_and_investment_income_net
    12 * 1000000, -- other_components_of_net_periodic_benefit_cost
    847 * 1000000, -- other_income_net
    3331 * 1000000, -- earnings_before_income_taxes
    456 * 1000000, -- provision_for_income_taxes
    2875 * 1000000, -- net_earnings
    2870 * 1000000, -- net_earnings_attributable_to_el
    7.91, -- basic_eps_attributable_to_el
    7.79, -- diluted_eps_attributable_to_el
    362.9 * 1000000, -- weighted_avg_common_shares_outstanding_basic
    368.2 * 1000000 -- weighted_avg_common_shares_outstanding_diluted
);