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
    15910 * CAST(1000000 AS FLOAT8), -- net_sales
    4564 * CAST(1000000 AS FLOAT8), -- cogs
    11346 * CAST(1000000 AS FLOAT8), -- gross_profit
    9575 * CAST(1000000 AS FLOAT8), -- sga
    55 * CAST(1000000 AS FLOAT8), -- restructuring_and_other_charges
    0 * CAST(1000000 AS FLOAT8), -- goodwill_impairment
    207 * CAST(1000000 AS FLOAT8), -- impairment_of_other_intangible_and_long_lived_assets
    9837 * CAST(1000000 AS FLOAT8), -- total_operating_expenses
    1509 * CAST(1000000 AS FLOAT8), -- operating_income
    255 * CAST(1000000 AS FLOAT8), -- interest_expense
    131 * CAST(1000000 AS FLOAT8), -- interest_income_and_investment_income_net
    -12 * CAST(1000000 AS FLOAT8), -- other_components_of_net_periodic_benefit_cost
    0 * CAST(1000000 AS FLOAT8), -- other_income_net
    1397 * CAST(1000000 AS FLOAT8), -- earnings_before_income_taxes
    387 * CAST(1000000 AS FLOAT8), -- provision_for_income_taxes
    1010 * CAST(1000000 AS FLOAT8), -- net_earnings
    1006 * CAST(1000000 AS FLOAT8), -- net_earnings_attributable_to_el
    2.81, -- basic_eps_attributable_to_el
    2.79, -- diluted_eps_attributable_to_el
    357.9 * CAST(1000000 AS FLOAT8), -- weighted_avg_common_shares_outstanding_basic
    360.9 * CAST(1000000 AS FLOAT8) -- weighted_avg_common_shares_outstanding_diluted
), (
    2, -- id
    2, -- financial_report_id
    17737 * CAST(1000000 AS FLOAT8), -- net_sales
    4305 * CAST(1000000 AS FLOAT8), -- cogs
    13432 * CAST(1000000 AS FLOAT8), -- gross_profit
    9888 * CAST(1000000 AS FLOAT8), -- sga
    133 * CAST(1000000 AS FLOAT8), -- restructuring_and_other_charges
    0 * CAST(1000000 AS FLOAT8), -- goodwill_impairment
    241 * CAST(1000000 AS FLOAT8), -- impairment_of_other_intangible_and_long_lived_assets
    10262 * CAST(1000000 AS FLOAT8), -- total_operating_expenses
    3170 * CAST(1000000 AS FLOAT8), -- operating_income
    167 * CAST(1000000 AS FLOAT8), -- interest_expense
    30 * CAST(1000000 AS FLOAT8), -- interest_income_and_investment_income_net
    -2 * CAST(1000000 AS FLOAT8), -- other_components_of_net_periodic_benefit_cost
    1 * CAST(1000000 AS FLOAT8), -- other_income_net
    3036 * CAST(1000000 AS FLOAT8), -- earnings_before_income_taxes
    628 * CAST(1000000 AS FLOAT8), -- provision_for_income_taxes
    2408 * CAST(1000000 AS FLOAT8), -- net_earnings
    2390 * CAST(1000000 AS FLOAT8), -- net_earnings_attributable_to_el
    6.64, -- basic_eps_attributable_to_el
    6.55, -- diluted_eps_attributable_to_el
    360.0 * CAST(1000000 AS FLOAT8), -- weighted_avg_common_shares_outstanding_basic
    364.9 * CAST(1000000 AS FLOAT8) -- weighted_avg_common_shares_outstanding_diluted
), (
    3, -- id
    3, -- financial_report_id
    16215 * CAST(1000000 AS FLOAT8), -- net_sales
    3834 * CAST(1000000 AS FLOAT8), -- cogs
    12381 * CAST(1000000 AS FLOAT8), -- gross_profit
    9371 * CAST(1000000 AS FLOAT8), -- sga
    204 * CAST(1000000 AS FLOAT8), -- restructuring_and_other_charges
    54 * CAST(1000000 AS FLOAT8), -- goodwill_impairment
    134 * CAST(1000000 AS FLOAT8), -- impairment_of_other_intangible_and_long_lived_assets
    9763 * CAST(1000000 AS FLOAT8), -- total_operating_expenses
    2618 * CAST(1000000 AS FLOAT8), -- operating_income
    173 * CAST(1000000 AS FLOAT8), -- interest_expense
    51 * CAST(1000000 AS FLOAT8), -- interest_income_and_investment_income_net
    12 * CAST(1000000 AS FLOAT8), -- other_components_of_net_periodic_benefit_cost
    847 * CAST(1000000 AS FLOAT8), -- other_income_net
    3331 * CAST(1000000 AS FLOAT8), -- earnings_before_income_taxes
    456 * CAST(1000000 AS FLOAT8), -- provision_for_income_taxes
    2875 * CAST(1000000 AS FLOAT8), -- net_earnings
    2870 * CAST(1000000 AS FLOAT8), -- net_earnings_attributable_to_el
    7.91, -- basic_eps_attributable_to_el
    7.79, -- diluted_eps_attributable_to_el
    362.9 * CAST(1000000 AS FLOAT8), -- weighted_avg_common_shares_outstanding_basic
    368.2 * CAST(1000000 AS FLOAT8) -- weighted_avg_common_shares_outstanding_diluted
), (
    4, -- id
    4, -- financial_report_id
    14294 * CAST(1000000 AS FLOAT8), -- net_sales
    3552 * CAST(1000000 AS FLOAT8), -- cogs
    10742 * CAST(1000000 AS FLOAT8), -- gross_profit
    8637 * CAST(1000000 AS FLOAT8), -- sga
    73 * CAST(1000000 AS FLOAT8), -- restructuring_and_other_charges
    812 * CAST(1000000 AS FLOAT8), -- goodwill_impairment
    614 * CAST(1000000 AS FLOAT8), -- impairment_of_other_intangible_and_long_lived_assets
    10136 * CAST(1000000 AS FLOAT8), -- total_operating_expenses
    606 * CAST(1000000 AS FLOAT8), -- operating_income
    161 * CAST(1000000 AS FLOAT8), -- interest_expense
    48 * CAST(1000000 AS FLOAT8), -- interest_income_and_investment_income_net
    4 * CAST(1000000 AS FLOAT8), -- other_components_of_net_periodic_benefit_cost
    557 * CAST(1000000 AS FLOAT8), -- other_income_net
    1046 * CAST(1000000 AS FLOAT8), -- earnings_before_income_taxes
    350 * CAST(1000000 AS FLOAT8), -- provision_for_income_taxes
    696 * CAST(1000000 AS FLOAT8), -- net_earnings
    684 * CAST(1000000 AS FLOAT8), -- net_earnings_attributable_to_el
    1.90, -- basic_eps_attributable_to_el
    1.86, -- diluted_eps_attributable_to_el
    360.6 * CAST(1000000 AS FLOAT8), -- weighted_avg_common_shares_outstanding_basic
    366.9 * CAST(1000000 AS FLOAT8) -- weighted_avg_common_shares_outstanding_diluted
), (
    5, -- id
    5, -- financial_report_id
    14863 * CAST(1000000 AS FLOAT8), -- net_sales
    3387 * CAST(1000000 AS FLOAT8), -- cogs
    11476 * CAST(1000000 AS FLOAT8), -- gross_profit
    8857 * CAST(1000000 AS FLOAT8), -- sga
    216 * CAST(1000000 AS FLOAT8), -- restructuring_and_other_charges
    68 * CAST(1000000 AS FLOAT8), -- goodwill_impairment
    22 * CAST(1000000 AS FLOAT8), -- impairment_of_other_intangible_and_long_lived_assets
    9163 * CAST(1000000 AS FLOAT8), -- total_operating_expenses
    2313 * CAST(1000000 AS FLOAT8), -- operating_income
    133 * CAST(1000000 AS FLOAT8), -- interest_expense
    58 * CAST(1000000 AS FLOAT8), -- interest_income_and_investment_income_net
    2 * CAST(1000000 AS FLOAT8), -- other_components_of_net_periodic_benefit_cost
    71 * CAST(1000000 AS FLOAT8), -- other_income_net
    2307 * CAST(1000000 AS FLOAT8), -- earnings_before_income_taxes
    513 * CAST(1000000 AS FLOAT8), -- provision_for_income_taxes
    1794 * CAST(1000000 AS FLOAT8), -- net_earnings
    1785 * CAST(1000000 AS FLOAT8), -- net_earnings_attributable_to_el
    4.91, -- basic_eps_attributable_to_el
    4.82, -- diluted_eps_attributable_to_el
    363.5 * CAST(1000000 AS FLOAT8), -- weighted_avg_common_shares_outstanding_basic
    370.4 * CAST(1000000 AS FLOAT8) -- weighted_avg_common_shares_outstanding_diluted
), (
    6, -- id
    6, -- financial_report_id
    13683 * CAST(1000000 AS FLOAT8), -- net_sales
    2844 * CAST(1000000 AS FLOAT8), -- cogs
    10839 * CAST(1000000 AS FLOAT8), -- gross_profit
    8553 * CAST(1000000 AS FLOAT8), -- sga
    231 * CAST(1000000 AS FLOAT8), -- restructuring_and_other_charges
    0 * CAST(1000000 AS FLOAT8), -- goodwill_impairment
    0 * CAST(1000000 AS FLOAT8), -- impairment_of_other_intangible_and_long_lived_assets
    8784 * CAST(1000000 AS FLOAT8), -- total_operating_expenses
    2055 * CAST(1000000 AS FLOAT8), -- operating_income
    128 * CAST(1000000 AS FLOAT8), -- interest_expense
    56 * CAST(1000000 AS FLOAT8), -- interest_income_and_investment_income_net
    3 * CAST(1000000 AS FLOAT8), -- other_components_of_net_periodic_benefit_cost
    0 * CAST(1000000 AS FLOAT8), -- other_income_net
    1980 * CAST(1000000 AS FLOAT8), -- earnings_before_income_taxes
    863 * CAST(1000000 AS FLOAT8), -- provision_for_income_taxes
    1117 * CAST(1000000 AS FLOAT8), -- net_earnings
    1108 * CAST(1000000 AS FLOAT8), -- net_earnings_attributable_to_el
    3.01, -- basic_eps_attributable_to_el
    2.95, -- diluted_eps_attributable_to_el
    368.0 * CAST(1000000 AS FLOAT8), -- weighted_avg_common_shares_outstanding_basic
    375.7 * CAST(1000000 AS FLOAT8) -- weighted_avg_common_shares_outstanding_diluted
), (
    7, -- id
    7, -- financial_report_id
    11824 * CAST(1000000 AS FLOAT8), -- net_sales
    2434 * CAST(1000000 AS FLOAT8), -- cogs
    9390 * CAST(1000000 AS FLOAT8), -- gross_profit
    7560 * CAST(1000000 AS FLOAT8), -- sga
    195 * CAST(1000000 AS FLOAT8), -- restructuring_and_other_charges
    28 * CAST(1000000 AS FLOAT8), -- goodwill_impairment
    3 * CAST(1000000 AS FLOAT8), -- impairment_of_other_intangible_and_long_lived_assets
    7686 * CAST(1000000 AS FLOAT8), -- total_operating_expenses
    1704 * CAST(1000000 AS FLOAT8), -- operating_income
    103 * CAST(1000000 AS FLOAT8), -- interest_expense
    28 * CAST(1000000 AS FLOAT8), -- interest_income_and_investment_income_net
    12 * CAST(1000000 AS FLOAT8), -- other_components_of_net_periodic_benefit_cost
    0 * CAST(1000000 AS FLOAT8), -- other_income_net
    1617 * CAST(1000000 AS FLOAT8), -- earnings_before_income_taxes
    361 * CAST(1000000 AS FLOAT8), -- provision_for_income_taxes
    1256 * CAST(1000000 AS FLOAT8), -- net_earnings
    1249 * CAST(1000000 AS FLOAT8), -- net_earnings_attributable_to_el
    3.40, -- basic_eps_attributable_to_el
    3.35, -- diluted_eps_attributable_to_el
    367.1 * CAST(1000000 AS FLOAT8), -- weighted_avg_common_shares_outstanding_basic
    373.0 * CAST(1000000 AS FLOAT8) -- weighted_avg_common_shares_outstanding_diluted
), (
    8, -- id
    8, -- financial_report_id
    11262 * CAST(1000000 AS FLOAT8), -- net_sales
    2181 * CAST(1000000 AS FLOAT8), -- cogs
    9081 * CAST(1000000 AS FLOAT8), -- gross_profit
    7338 * CAST(1000000 AS FLOAT8), -- sga
    133 * CAST(1000000 AS FLOAT8), -- restructuring_and_other_charges
    0 * CAST(1000000 AS FLOAT8), -- goodwill_impairment
    0 * CAST(1000000 AS FLOAT8), -- impairment_of_other_intangible_and_long_lived_assets
    7471 * CAST(1000000 AS FLOAT8), -- total_operating_expenses
    1610 * CAST(1000000 AS FLOAT8), -- operating_income
    71 * CAST(1000000 AS FLOAT8), -- interest_expense
    16 * CAST(1000000 AS FLOAT8), -- interest_income_and_investment_income_net
    0 * CAST(1000000 AS FLOAT8), -- other_components_of_net_periodic_benefit_cost
    0 * CAST(1000000 AS FLOAT8), -- other_income_net
    1555 * CAST(1000000 AS FLOAT8), -- earnings_before_income_taxes
    434 * CAST(1000000 AS FLOAT8), -- provision_for_income_taxes
    1121 * CAST(1000000 AS FLOAT8), -- net_earnings
    1115 * CAST(1000000 AS FLOAT8), -- net_earnings_attributable_to_el
    3.01, -- basic_eps_attributable_to_el
    2.96, -- diluted_eps_attributable_to_el
    370.0 * CAST(1000000 AS FLOAT8), -- weighted_avg_common_shares_outstanding_basic
    376.6 * CAST(1000000 AS FLOAT8) -- weighted_avg_common_shares_outstanding_diluted
), (
    9, -- id
    9, -- financial_report_id
    10780 * CAST(1000000 AS FLOAT8), -- net_sales
    2100 * CAST(1000000 AS FLOAT8), -- cogs
    8680 * CAST(1000000 AS FLOAT8), -- gross_profit
    7074 * CAST(1000000 AS FLOAT8), -- sga
    0 * CAST(1000000 AS FLOAT8), -- restructuring_and_other_charges
    0 * CAST(1000000 AS FLOAT8), -- goodwill_impairment
    0 * CAST(1000000 AS FLOAT8), -- impairment_of_other_intangible_and_long_lived_assets
    7074 * CAST(1000000 AS FLOAT8), -- total_operating_expenses
    1606 * CAST(1000000 AS FLOAT8), -- operating_income
    60 * CAST(1000000 AS FLOAT8), -- interest_expense
    15 * CAST(1000000 AS FLOAT8), -- interest_income_and_investment_income_net
    0 * CAST(1000000 AS FLOAT8), -- other_components_of_net_periodic_benefit_cost
    0 * CAST(1000000 AS FLOAT8), -- other_income_net
    1561 * CAST(1000000 AS FLOAT8), -- earnings_before_income_taxes
    467 * CAST(1000000 AS FLOAT8), -- provision_for_income_taxes
    1094 * CAST(1000000 AS FLOAT8), -- net_earnings
    1089 * CAST(1000000 AS FLOAT8), -- net_earnings_attributable_to_el
    2.87, -- basic_eps_attributable_to_el
    2.82, -- diluted_eps_attributable_to_el
    379.3 * CAST(1000000 AS FLOAT8), -- weighted_avg_common_shares_outstanding_basic
    385.7 * CAST(1000000 AS FLOAT8) -- weighted_avg_common_shares_outstanding_diluted
), (
    10, -- id
    10, -- financial_report_id
    10968.8 * CAST(1000000 AS FLOAT8), -- net_sales
    2158.2 * CAST(1000000 AS FLOAT8), -- cogs
    8810.6 * CAST(1000000 AS FLOAT8), -- gross_profit
    6985.9 * CAST(1000000 AS FLOAT8), -- sga
    -2.9 * CAST(1000000 AS FLOAT8), -- restructuring_and_other_charges
    0 * CAST(1000000 AS FLOAT8), -- goodwill_impairment
    0 * CAST(1000000 AS FLOAT8), -- impairment_of_other_intangible_and_long_lived_assets
    6983 * CAST(1000000 AS FLOAT8), -- total_operating_expenses
    1827.6 * CAST(1000000 AS FLOAT8), -- operating_income
    59.4 * CAST(1000000 AS FLOAT8), -- interest_expense
    8.6 * CAST(1000000 AS FLOAT8), -- interest_income_and_investment_income_net
    0 * CAST(1000000 AS FLOAT8), -- other_components_of_net_periodic_benefit_cost
    0 * CAST(1000000 AS FLOAT8), -- other_income_net
    1776.8 * CAST(1000000 AS FLOAT8), -- earnings_before_income_taxes
    567.7 * CAST(1000000 AS FLOAT8), -- provision_for_income_taxes
    1209.1 * CAST(1000000 AS FLOAT8), -- net_earnings
    1204.1 * CAST(1000000 AS FLOAT8), -- net_earnings_attributable_to_el
    3.12, -- basic_eps_attributable_to_el
    3.06, -- diluted_eps_attributable_to_el
    386.2 * CAST(1000000 AS FLOAT8), -- weighted_avg_common_shares_outstanding_basic
    393.1 * CAST(1000000 AS FLOAT8) -- weighted_avg_common_shares_outstanding_diluted
), (
    11, -- id
    11, -- financial_report_id
    10181.7 * CAST(1000000 AS FLOAT8), -- net_sales
    2025.9 * CAST(1000000 AS FLOAT8), -- cogs
    8155.8 * CAST(1000000 AS FLOAT8), -- gross_profit
    6597 * CAST(1000000 AS FLOAT8), -- sga
    15.1 * CAST(1000000 AS FLOAT8), -- restructuring_and_other_charges
    9.6 * CAST(1000000 AS FLOAT8), -- goodwill_impairment
    8.1 * CAST(1000000 AS FLOAT8), -- impairment_of_other_intangible_and_long_lived_assets
    6629.8 * CAST(1000000 AS FLOAT8), -- total_operating_expenses
    1526 * CAST(1000000 AS FLOAT8), -- operating_income
    (63.1 + 19.1) * CAST(1000000 AS FLOAT8), -- interest_expense
    8.3 * CAST(1000000 AS FLOAT8), -- interest_income_and_investment_income_net
    0 * CAST(1000000 AS FLOAT8), -- other_components_of_net_periodic_benefit_cost
    23.1 * CAST(1000000 AS FLOAT8), -- other_income_net
    1475.2 * CAST(1000000 AS FLOAT8), -- earnings_before_income_taxes
    451.4 * CAST(1000000 AS FLOAT8), -- provision_for_income_taxes
    1023.8 * CAST(1000000 AS FLOAT8), -- net_earnings
    1019.8 * CAST(1000000 AS FLOAT8), -- net_earnings_attributable_to_el
    2.63, -- basic_eps_attributable_to_el
    2.58, -- diluted_eps_attributable_to_el
    387.6 * CAST(1000000 AS FLOAT8), -- weighted_avg_common_shares_outstanding_basic
    394.9 * CAST(1000000 AS FLOAT8) -- weighted_avg_common_shares_outstanding_diluted
), (
    12, -- id
    12, -- financial_report_id
    9713.6 * CAST(1000000 AS FLOAT8), -- net_sales
    1995.8 * CAST(1000000 AS FLOAT8), -- cogs
    7717.8 * CAST(1000000 AS FLOAT8), -- gross_profit
    6324.8 * CAST(1000000 AS FLOAT8), -- sga
    59.6 * CAST(1000000 AS FLOAT8), -- restructuring_and_other_charges
    0 * CAST(1000000 AS FLOAT8), -- goodwill_impairment
    21.7 * CAST(1000000 AS FLOAT8), -- impairment_of_other_intangible_and_long_lived_assets
    6406.1 * CAST(1000000 AS FLOAT8), -- total_operating_expenses
    1311.7 * CAST(1000000 AS FLOAT8), -- operating_income
    61.1 * CAST(1000000 AS FLOAT8), -- interest_expense
    0 * CAST(1000000 AS FLOAT8), -- interest_income_and_investment_income_net
    0 * CAST(1000000 AS FLOAT8), -- other_components_of_net_periodic_benefit_cost
    10.5 * CAST(1000000 AS FLOAT8), -- other_income_net
    1261.1 * CAST(1000000 AS FLOAT8), -- earnings_before_income_taxes
    400.6 * CAST(1000000 AS FLOAT8), -- provision_for_income_taxes
    860.5 * CAST(1000000 AS FLOAT8), -- net_earnings
    856.9 * CAST(1000000 AS FLOAT8), -- net_earnings_attributable_to_el
    2.20, -- basic_eps_attributable_to_el
    2.16, -- diluted_eps_attributable_to_el
    388.7 * CAST(1000000 AS FLOAT8), -- weighted_avg_common_shares_outstanding_basic
    397 * CAST(1000000 AS FLOAT8) -- weighted_avg_common_shares_outstanding_diluted
);
