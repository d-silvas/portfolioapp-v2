INSERT INTO public.sbux_financial_reports (
    id,
    period,
    calendar_year,
    end_date,
    publication_date
) VALUES
    (1,'full',2022,'2022-10-02',NULL),
    (2,'full',2021,'2021-10-03',NULL),
    (3,'full',2020,'2020-09-27',NULL),
    (4,'full',2019,'2019-09-29',NULL),
    (5,'full',2018,'2018-09-30',NULL),
    (6,'full',2017,'2017-09-29',NULL), -- TODO end_date (from here)
    (7,'full',2016,'2016-09-29',NULL),
    (8,'full',2015,'2015-09-29',NULL);

INSERT INTO public.sbux_income_statements (
    id,
    financial_report_id,
    revenues_company_operated_stores,
    revenues_licensed_stores,
    revenues_other,
    net_revenues,
    product_and_distribution_costs,
    store_operating_expenses,
    other_operating_expenses,
    depreciation_and_amortization_expenses,
    general_and_administrative_expenses,
    restructuring_and_impairments,
    total_operating_expenses,
    income_from_equity_investments,
    operating_income,
    acquisitions_and_divestitures,
    interest_income_and_other,
    interest_expense,
    earnings_before_income_taxes,
    income_tax_expense,
    net_earnings,
    eps_basic,
    eps_diluted,
    weighted_average_shares_outstanding_basic,
    weighted_average_shares_outstanding_diluted
) VALUES (
    1, -- id
    1, -- financial_report_id
    26576100000, -- revenues_company_operated_stores
    3655500000, -- revenues_licensed_stores
    2018700000, -- revenues_other
    32250300000, -- net_revenues
    10317400000, -- product_and_distribution_costs
    13561800000, -- store_operating_expenses
    461500000, -- other_operating_expenses
    1447900000, -- depreciation_and_amortization_expenses
    2032000000, -- general_and_administrative_expenses
    46000000, -- restructuring_and_impairments
    27866600000, -- total_operating_expenses
    234100000, -- income_from_equity_investments
    4617800000, -- operating_income
    0, -- acquisitions_and_divestitures
    97000000, -- interest_income_and_other
    -482900000, -- interest_expense
    4231900000, -- earnings_before_income_taxes
    948500000, -- income_tax_expense
    3281600000, -- net_earnings
    2.85, -- eps_basic
    2.83, -- eps_diluted
    1153300000, -- weighted_average_shares_outstanding_basic
    1158500000 -- weighted_average_shares_outstanding_diluted
), (
    2, -- id
    2, -- financial_report_id
    24607000000, -- revenues_company_operated_stores
    2683600000, -- revenues_licensed_stores
    1770000000, -- revenues_other
    29060600000, -- net_revenues
    8738700000, -- product_and_distribution_costs
    11930900000, -- store_operating_expenses
    359500000, -- other_operating_expenses
    1441700000, -- depreciation_and_amortization_expenses
    1932600000, -- general_and_administrative_expenses
    170400000, -- restructuring_and_impairments
    24573800000, -- total_operating_expenses
    385300000, -- income_from_equity_investments
    4872100000, -- operating_income
    864500000, -- acquisitions_and_divestitures
    90100000, -- interest_income_and_other
    -469800000, -- interest_expense
    5356900000, -- earnings_before_income_taxes
    1156600000, -- income_tax_expense
    4199300000, -- net_earnings
    3.57, -- eps_basic
    3.54, -- eps_diluted
    1177600000, -- weighted_average_shares_outstanding_basic
    1185500000 -- weighted_average_shares_outstanding_diluted
), (
    3, -- id
    3, -- financial_report_id
    19164600000, -- revenues_company_operated_stores
    2327100000, -- revenues_licensed_stores
    2026300000, -- revenues_other
    23518000000, -- net_revenues
    7694900000, -- product_and_distribution_costs
    10764000000, -- store_operating_expenses
    430300000, -- other_operating_expenses
    1431300000, -- depreciation_and_amortization_expenses
    1679600000, -- general_and_administrative_expenses
    278700000, -- restructuring_and_impairments
    22278800000, -- total_operating_expenses
    322500000, -- income_from_equity_investments
    1561700000, -- operating_income
    0, -- acquisitions_and_divestitures
    39700000, -- interest_income_and_other
    -437000000, -- interest_expense
    1164400000, -- earnings_before_income_taxes
    239700000, -- income_tax_expense
    928300000, -- net_earnings
    0.79, -- eps_basic
    0.79, -- eps_diluted
    1172800000, -- weighted_average_shares_outstanding_basic
    1181800000 -- weighted_average_shares_outstanding_diluted
), (
    4, -- id
    4, -- financial_report_id
    21544400000, -- revenues_company_operated_stores
    2875000000, -- revenues_licensed_stores
    2089200000, -- revenues_other
    26508600000, -- net_revenues
    8526900000, -- product_and_distribution_costs
    10493600000, -- store_operating_expenses
    371000000, -- other_operating_expenses
    1377300000, -- depreciation_and_amortization_expenses
    1824100000, -- general_and_administrative_expenses
    135800000, -- restructuring_and_impairments
    22728700000, -- total_operating_expenses
    298000000, -- income_from_equity_investments
    4077900000, -- operating_income
    622800000, -- acquisitions_and_divestitures
    96500000, -- interest_income_and_other
    -331000000, -- interest_expense
    4466200000, -- earnings_before_income_taxes
    871600000, -- income_tax_expense
    3599200000, -- net_earnings
    2.95, -- eps_basic
    2.92, -- eps_diluted
    1221200000, -- weighted_average_shares_outstanding_basic
    1233200000 -- weighted_average_shares_outstanding_diluted
), (
    5, -- id
    5, -- financial_report_id
    19690300000, -- revenues_company_operated_stores
    2652200000, -- revenues_licensed_stores
    2377000000, -- revenues_other
    24719500000, -- net_revenues
    7930700000, -- product_and_distribution_costs
    9472200000, -- store_operating_expenses
    554900000, -- other_operating_expenses
    1247000000, -- depreciation_and_amortization_expenses
    1708200000, -- general_and_administrative_expenses
    224400000, -- restructuring_and_impairments
    21137400000, -- total_operating_expenses
    301200000, -- income_from_equity_investments
    3883300000, -- operating_income
    1376400000+499200000, -- acquisitions_and_divestitures
    191400000, -- interest_income_and_other
    -170300000, -- interest_expense
    5780000000, -- earnings_before_income_taxes
    1262000000, -- income_tax_expense
    4518300000, -- net_earnings
    3.27, -- eps_basic
    3.24, -- eps_diluted
    1382700000, -- weighted_average_shares_outstanding_basic
    1394600000 -- weighted_average_shares_outstanding_diluted
), (
    6, -- id
    6, -- financial_report_id
    17650700000, -- revenues_company_operated_stores
    2355000000, -- revenues_licensed_stores
    2381100000, -- revenues_other
    22386800000, -- net_revenues
    9038200000, -- product_and_distribution_costs
    6493300000, -- store_operating_expenses
    553800000, -- other_operating_expenses
    1011400000, -- depreciation_and_amortization_expenses
    1393300000, -- general_and_administrative_expenses
    153500000, -- restructuring_and_impairments
    18643500000, -- total_operating_expenses
    391400000, -- income_from_equity_investments
    4134700000, -- operating_income
    0, -- acquisitions_and_divestitures
    275300000, -- interest_income_and_other
    -92500000, -- interest_expense
    4317500000, -- earnings_before_income_taxes
    1432600000, -- income_tax_expense
    2884700000, -- net_earnings
    1.99, -- eps_basic
    1.97, -- eps_diluted
    1449500000, -- weighted_average_shares_outstanding_basic
    1461500000 -- weighted_average_shares_outstanding_diluted
), (
    7, -- id
    7, -- financial_report_id
    16884100000, -- revenues_company_operated_stores
    2154200000, -- revenues_licensed_stores
    2317600000, -- revenues_other
    21315900000, -- net_revenues
    8511100000, -- product_and_distribution_costs
    6064300000, -- store_operating_expenses
    545400000, -- other_operating_expenses
    980800000, -- depreciation_and_amortization_expenses
    1360600000, -- general_and_administrative_expenses
    0, -- restructuring_and_impairments
    17462200000, -- total_operating_expenses
    318200000, -- income_from_equity_investments
    4171900000, -- operating_income
    0, -- acquisitions_and_divestitures
    108000000, -- interest_income_and_other
    -81300000, -- interest_expense
    4198600000, -- earnings_before_income_taxes
    1379700000, -- income_tax_expense
    2817700000, -- net_earnings
    1.91, -- eps_basic
    1.90, -- eps_diluted
    1471600000, -- weighted_average_shares_outstanding_basic
    1486700000 -- weighted_average_shares_outstanding_diluted
), (
    8, -- id
    8, -- financial_report_id
    15197300000, -- revenues_company_operated_stores
    1861900000, -- revenues_licensed_stores
    2103500000, -- revenues_other
    19162700000, -- net_revenues
    7787500000, -- product_and_distribution_costs
    5411100000, -- store_operating_expenses
    522400000, -- other_operating_expenses
    893900000, -- depreciation_and_amortization_expenses
    1196700000, -- general_and_administrative_expenses
    0, -- restructuring_and_impairments
    15811600000, -- total_operating_expenses
    249900000, -- income_from_equity_investments
    3601000000, -- operating_income
    390600000, -- acquisitions_and_divestitures
    43000000, -- interest_income_and_other
    -131600000, -- interest_expense
    3903000000, -- earnings_before_income_taxes
    1143700000, -- income_tax_expense
    2757400000, -- net_earnings
    1.84, -- eps_basic
    1.82, -- eps_diluted
    1495900000, -- weighted_average_shares_outstanding_basic
    1513400000 -- weighted_average_shares_outstanding_diluted
);

INSERT INTO public.sbux_balance_sheets (
    id,
    financial_report_id,
    cash_and_cash_equivalents,
    short_term_investments,
    accounts_receivable_net,
    inventories,
    prepaid_expenses_and_other_current_assets,
    total_current_assets,
    long_term_investments,
    equity_investments,
    ppe_net,
    operating_lease_right_of_use_asset,
    deferred_income_taxes_net,
    other_long_term_assets,
    other_intangible_assets,
    goodwill,
    total_assets,
    accounts_payable,
    accrued_liabilities,
    accrued_payroll_and_benefits,
    income_taxes_payable,
    current_portion_of_operating_lease_liability,
    stored_value_card_liab_and_current_portion_of_def_rev,
    short_term_debt,
    current_portion_of_long_term_debt,
    total_current_liabilities,
    long_term_debt,
    operating_lease_liability,
    deferred_revenue,
    other_long_term_liabilities,
    total_liabilities,
    common_stock,
    additional_paid_in_capital,
    retained_earnings,
    accumulated_other_comprehensive_income,
    total_shareholders_equity
) VALUES (
    1, -- id
    1, -- financial_report_id
    2818400000,-- cash_and_cash_equivalents
    364500000,-- short_term_investments
    1175500000,-- accounts_receivable_net
    2176600000,-- inventories
    483700000,-- prepaid_expenses_and_other_current_assets
    7018700000,-- total_current_assets
    279100000,-- long_term_investments
    311200000,-- equity_investments
    6560500000,-- ppe_net
    8015600000,-- operating_lease_right_of_use_asset
    1799700000,-- deferred_income_taxes_net
    554200000,-- other_long_term_assets
    155900000,-- other_intangible_assets
    3283500000,-- goodwill
    27978400000,-- total_assets
    1441400000,-- accounts_payable
    2137100000,-- accrued_liabilities
    761700000,-- accrued_payroll_and_benefits
    0,-- income_taxes_payable
    1245700000,-- current_portion_of_operating_lease_liability
    1641900000,-- stored_value_card_liab_and_current_portion_of_def_rev
    175000000,-- short_term_debt
    1749000000,-- current_portion_of_long_term_debt
    9151800000,-- total_current_liabilities
    13119900000,-- long_term_debt
    7515200000,-- operating_lease_liability
    6279700000,-- deferred_revenue
    610500000,-- other_long_term_liabilities
    36377100000,-- total_liabilities
    1.1,-- common_stock
    205300000,-- additional_paid_in_capital
    -8449800000,-- retained_earnings
    -463200000,-- accumulated_other_comprehensive_income
    -8706600000-- total_shareholders_equity
);