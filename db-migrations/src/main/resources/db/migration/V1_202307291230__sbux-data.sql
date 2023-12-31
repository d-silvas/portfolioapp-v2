INSERT INTO public.sbux_financial_reports (
    id,
    period,
    calendar_year,
    end_date,
    publication_date
) VALUES
    (1,'full',2022,'2022-10-02','2022-11-18'),
    (2,'full',2021,'2021-10-03','2021-11-19'),
    (3,'full',2020,'2020-09-27','2020-11-12'),
    (4,'full',2019,'2019-09-29','2019-11-15'),
    (5,'full',2018,'2018-09-30','2018-11-16'),
    (6,'full',2017,'2017-10-01','2017-11-17'),
    (7,'full',2016,'2016-10-02','2016-11-18'),
    (8,'full',2015,'2015-09-27','2015-11-12'),
    (9,'full',2014,'2014-09-28','2014-11-14'),
    (10,'full',2013,'2013-09-29','2013-11-18'),
    (11,'full',2012,'2012-09-30','2012-11-16'),
    (12,'full',2011,'2011-10-02','2015-11-18');

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
),
 -- NOTE: THERE WAS A 2:1 SPLIT ON 2015-09-04
(
    9, -- id
    9, -- financial_report_id
    12977900000, -- revenues_company_operated_stores
    1588600000, -- revenues_licensed_stores
    1881300000, -- revenues_other
    16447800000, -- net_revenues
    6858800000, -- product_and_distribution_costs
    4638200000, -- store_operating_expenses
    457300000, -- other_operating_expenses
    709600000, -- depreciation_and_amortization_expenses
    991300000, -- general_and_administrative_expenses
    -20200000, -- restructuring_and_impairments
    13635000000, -- total_operating_expenses
    268300000, -- income_from_equity_investments
    3081100000, -- operating_income
    0, -- acquisitions_and_divestitures
    142700000, -- interest_income_and_other
    -64100000, -- interest_expense
    3159700000, -- earnings_before_income_taxes
    1092000000, -- income_tax_expense
    2068100000, -- net_earnings
    2.75/2, -- eps_basic
    2.71/2, -- eps_diluted
    753100000*2, -- weighted_average_shares_outstanding_basic
    763100000*2 -- weighted_average_shares_outstanding_diluted
), (
    10, -- id
    10, -- financial_report_id
    11793200000, -- revenues_company_operated_stores
    1360500000, -- revenues_licensed_stores
    1713100000, -- revenues_other
    14866800000, -- net_revenues
    6382300000, -- product_and_distribution_costs
    4286100000, -- store_operating_expenses
    431800000, -- other_operating_expenses
    621400000, -- depreciation_and_amortization_expenses
    937900000, -- general_and_administrative_expenses
    2784100000, -- restructuring_and_impairments
    15443600000, -- total_operating_expenses
    251400000, -- income_from_equity_investments
    -325400000, -- operating_income
    0, -- acquisitions_and_divestitures
    123600000, -- interest_income_and_other
    -28100000, -- interest_expense
    -229900000, -- earnings_before_income_taxes
    -238700000, -- income_tax_expense
    8300000, -- net_earnings
    0.01/2, -- eps_basic
    0.01/2, -- eps_diluted
    749300000*2, -- weighted_average_shares_outstanding_basic
    762300000*2 -- weighted_average_shares_outstanding_diluted
), (
    11, -- id
    11, -- financial_report_id
    10534500000, -- revenues_company_operated_stores
    1210300000, -- revenues_licensed_stores
    1532000000, -- revenues_other
    13276800000, -- net_revenues
    5813300000, -- product_and_distribution_costs
    3918100000, -- store_operating_expenses
    407200000, -- other_operating_expenses
    550300000, -- depreciation_and_amortization_expenses
    801200000, -- general_and_administrative_expenses
    0, -- restructuring_and_impairments
    11490100000, -- total_operating_expenses
    210700000, -- income_from_equity_investments
    1997400000, -- operating_income
    0, -- acquisitions_and_divestitures
    94400000, -- interest_income_and_other
    -32700000, -- interest_expense
    2059100000, -- earnings_before_income_taxes
    674400000, -- income_tax_expense
    1383800000, -- net_earnings
    1.83/2, -- eps_basic
    1.79/2, -- eps_diluted
    754400000*2, -- weighted_average_shares_outstanding_basic
    773000000*2 -- weighted_average_shares_outstanding_diluted
), (
    12, -- id
    12, -- financial_report_id
    9632400000, -- revenues_company_operated_stores
    1007500000, -- revenues_licensed_stores
    1060500000, -- revenues_other
    11700400000, -- net_revenues
    4915500000, -- product_and_distribution_costs
    3594900000, -- store_operating_expenses
    392800000, -- other_operating_expenses
    523300000, -- depreciation_and_amortization_expenses
    749300000, -- general_and_administrative_expenses
    0, -- restructuring_and_impairments
    10175800000, -- total_operating_expenses
    173700000, -- income_from_equity_investments
    1728500000, -- operating_income
    30200000, -- acquisitions_and_divestitures
    115900000, -- interest_income_and_other
    -33300000, -- interest_expense
    1811100000, -- earnings_before_income_taxes
    563100000, -- income_tax_expense
    1245700000, -- net_earnings
    1.66/2, -- eps_basic
    1.62/2, -- eps_diluted
    748300000, -- weighted_average_shares_outstanding_basic
    769700000 -- weighted_average_shares_outstanding_diluted
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
),(
    2, -- id
    2, -- financial_report_id
    6455700000,-- cash_and_cash_equivalents
    162200000,-- short_term_investments
    940000000,-- accounts_receivable_net
    1603900000,-- inventories
    594600000,-- prepaid_expenses_and_other_current_assets
    9756400000,-- total_current_assets
    281700000,-- long_term_investments
    268500000,-- equity_investments
    6369500000,-- ppe_net
    8236000000,-- operating_lease_right_of_use_asset
    1874800000,-- deferred_income_taxes_net
    578500000,-- other_long_term_assets
    349900000,-- other_intangible_assets
    3677300000,-- goodwill
    31392600000,-- total_assets
    1211600000,-- accounts_payable
    2321200000,-- accrued_liabilities
    772300000,-- accrued_payroll_and_benefits
    348000000,-- income_taxes_payable
    1251300000,-- current_portion_of_operating_lease_liability
    1596100000,-- stored_value_card_liab_and_current_portion_of_def_rev
    0,-- short_term_debt
    998900000,-- current_portion_of_long_term_debt
    8151400000,-- total_current_liabilities
    13616900000,-- long_term_debt
    7738000000,-- operating_lease_liability
    6463000000,-- deferred_revenue
    737800000,-- other_long_term_liabilities
    36707100000,-- total_liabilities
    1.2,-- common_stock
    846100000,-- additional_paid_in_capital
    -6315700000,-- retained_earnings
    147200000,-- accumulated_other_comprehensive_income
    -5321200000-- total_shareholders_equity
),(
    3, -- id
    3, -- financial_report_id
    4350900000,-- cash_and_cash_equivalents
    281200000,-- short_term_investments
    883400000,-- accounts_receivable_net
    1551400000,-- inventories
    739500000,-- prepaid_expenses_and_other_current_assets
    7806400000,-- total_current_assets
    206100000,-- long_term_investments
    478700000,-- equity_investments
    6241400000,-- ppe_net
    8134100000,-- operating_lease_right_of_use_asset
    1789900000,-- deferred_income_taxes_net
    568600000,-- other_long_term_assets
    552100000,-- other_intangible_assets
    3597200000,-- goodwill
    29374500000,-- total_assets
    997900000,-- accounts_payable
    1160700000,-- accrued_liabilities
    696000000,-- accrued_payroll_and_benefits
    98200000,-- income_taxes_payable
    1248200000,-- current_portion_of_operating_lease_liability
    1456500000,-- stored_value_card_liab_and_current_portion_of_def_rev
    438800000,-- short_term_debt
    1249900000,-- current_portion_of_long_term_debt
    7346800000,-- total_current_liabilities
    14659600000,-- long_term_debt
    7661700000,-- operating_lease_liability
    6598500000,-- deferred_revenue
    907300000,-- other_long_term_liabilities
    37173900000,-- total_liabilities
    1.2,-- common_stock
    373900000,-- additional_paid_in_capital
    -7815600000,-- retained_earnings
    -364600000,-- accumulated_other_comprehensive_income
    -7805100000-- total_shareholders_equity
),(
    4, -- id
    4, -- financial_report_id
    2686600000,-- cash_and_cash_equivalents
    70500000,-- short_term_investments
    879200000,-- accounts_receivable_net
    1529400000,-- inventories
    488200000,-- prepaid_expenses_and_other_current_assets
    5653900000,-- total_current_assets
    220000000,-- long_term_investments
    396000000,-- equity_investments
    6431700000,-- ppe_net
    0,-- operating_lease_right_of_use_asset
    1765800000,-- deferred_income_taxes_net
    479600000,-- other_long_term_assets
    781800000,-- other_intangible_assets
    3490800000,-- goodwill
    19219600000,-- total_assets
    1189700000,-- accounts_payable
    1753700000,-- accrued_liabilities
    664600000,-- accrued_payroll_and_benefits
    1291700000,-- income_taxes_payable
    0,-- current_portion_of_operating_lease_liability
    1269000000,-- stored_value_card_liab_and_current_portion_of_def_rev
    0,-- short_term_debt
    0,-- current_portion_of_long_term_debt
    6168700000,-- total_current_liabilities
    11167000000,-- long_term_debt
    0,-- operating_lease_liability
    6744400000,-- deferred_revenue
    1370500000,-- other_long_term_liabilities
    25450600000,-- total_liabilities
    1.2,-- common_stock
    31100000,-- additional_paid_in_capital
    -5771200000,-- retained_earnings
    -503300000,-- accumulated_other_comprehensive_income
    -6232200000-- total_shareholders_equity
);