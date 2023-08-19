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
    15910, -- net_sales
    4564, -- cogs
    11346, -- gross_profit
    9575, -- sga
    55, -- restructuring_and_other_charges
    0, -- goodwill_impairment
    207, -- impairment_of_other_intangible_and_long_lived_assets
    9837, -- total_operating_expenses
    1509, -- operating_income
    255, -- interest_expense
    131, -- interest_income_and_investment_income_net
    -12, -- other_components_of_net_periodic_benefit_cost
    0, -- other_income_net
    1397, -- earnings_before_income_taxes
    387, -- provision_for_income_taxes
    1010, -- net_earnings
    1006, -- net_earnings_attributable_to_el
    2.81, -- basic_eps_attributable_to_el
    2.79, -- diluted_eps_attributable_to_el
    357.9, -- weighted_avg_common_shares_outstanding_basic
    360.9 -- weighted_avg_common_shares_outstanding_diluted
), (
    2, -- id
    2, -- financial_report_id
    17737, -- net_sales
    4305, -- cogs
    13432, -- gross_profit
    9888, -- sga
    133, -- restructuring_and_other_charges
    0, -- goodwill_impairment
    241, -- impairment_of_other_intangible_and_long_lived_assets
    10262, -- total_operating_expenses
    3170, -- operating_income
    167, -- interest_expense
    30, -- interest_income_and_investment_income_net
    -2, -- other_components_of_net_periodic_benefit_cost
    1, -- other_income_net
    3036, -- earnings_before_income_taxes
    628, -- provision_for_income_taxes
    2408, -- net_earnings
    2390, -- net_earnings_attributable_to_el
    6.64, -- basic_eps_attributable_to_el
    6.55, -- diluted_eps_attributable_to_el
    360.0, -- weighted_avg_common_shares_outstanding_basic
    364.9 -- weighted_avg_common_shares_outstanding_diluted
), (
    3, -- id
    3, -- financial_report_id
    16215, -- net_sales
    3834, -- cogs
    12381, -- gross_profit
    9371, -- sga
    204, -- restructuring_and_other_charges
    54, -- goodwill_impairment
    134, -- impairment_of_other_intangible_and_long_lived_assets
    9763, -- total_operating_expenses
    2618, -- operating_income
    173, -- interest_expense
    51, -- interest_income_and_investment_income_net
    12, -- other_components_of_net_periodic_benefit_cost
    847, -- other_income_net
    3331, -- earnings_before_income_taxes
    456, -- provision_for_income_taxes
    2875, -- net_earnings
    2870, -- net_earnings_attributable_to_el
    7.91, -- basic_eps_attributable_to_el
    7.79, -- diluted_eps_attributable_to_el
    362.9, -- weighted_avg_common_shares_outstanding_basic
    368.2 -- weighted_avg_common_shares_outstanding_diluted
);