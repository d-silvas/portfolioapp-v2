CREATE TABLE public.sbux_financial_reports (
    id SERIAL PRIMARY KEY,
    period VARCHAR,
    calendar_year INTEGER,
    end_date DATE,
    publication_date DATE
);

CREATE TABLE public.sbux_income_statements (
    id SERIAL PRIMARY KEY,
    financial_report_id INTEGER UNIQUE,
    revenues_company_operated_stores FLOAT8,
    revenues_licensed_stores FLOAT8,
    revenues_other FLOAT8,
    net_revenues FLOAT8,
    product_and_distribution_costs FLOAT8,
    store_operating_expenses FLOAT8,
    other_operating_expenses FLOAT8,
    depreciation_and_amortization_expenses FLOAT8,
    general_and_administrative_expenses FLOAT8,
    restructuring_and_impairments FLOAT8,
    total_operating_expenses FLOAT8,
    income_from_equity_investments FLOAT8,
    operating_income FLOAT8,
    acquisitions_and_divestitures FLOAT8,
    interest_income_and_other FLOAT8,
    interest_expense FLOAT8,
    earnings_before_income_taxes FLOAT8,
    income_tax_expense FLOAT8,
    -- We don't save noncontrolling interests
    net_earnings FLOAT8,
    eps_basic FLOAT8,
    eps_diluted FLOAT8,
    weighted_average_shares_outstanding_basic FLOAT8,
    weighted_average_shares_outstanding_diluted FLOAT8,
    CONSTRAINT fk_financial_report
        FOREIGN KEY(financial_report_id)
        REFERENCES sbux_financial_reports(id)
);

CREATE TABLE public.sbux_balance_sheets (
    id SERIAL PRIMARY KEY,
    financial_report_id INTEGER UNIQUE,
    cash_and_cash_equivalents FLOAT8,
    short_term_investments FLOAT8,
    accounts_receivable_net FLOAT8,
    inventories FLOAT8,
    prepaid_expenses_and_other_current_assets FLOAT8,
    total_current_assets FLOAT8,
    long_term_investments FLOAT8,
    equity_investments FLOAT8,
    ppe_net FLOAT8,
    operating_lease_right_of_use_asset FLOAT8,
    deferred_income_taxes_net FLOAT8,
    other_long_term_assets FLOAT8,
    other_intangible_assets FLOAT8,
    goodwill FLOAT8,
    total_assets FLOAT8,
    accounts_payable FLOAT8,
    accrued_liabilities FLOAT8,
    accrued_payroll_and_benefits FLOAT8,
    income_taxes_payable FLOAT8,
    current_portion_of_operating_lease_liability FLOAT8,
    stored_value_card_liab_and_current_portion_of_def_rev FLOAT8,
    short_term_debt FLOAT8,
    current_portion_of_long_term_debt FLOAT8,
    total_current_liabilities FLOAT8,
    long_term_debt FLOAT8,
    operating_lease_liability FLOAT8,
    deferred_revenue FLOAT8,
    other_long_term_liabilities FLOAT8,
    total_liabilities FLOAT8,
    common_stock FLOAT8,
    additional_paid_in_capital FLOAT8,
    retained_earnings FLOAT8,
    accumulated_other_comprehensive_income FLOAT8,
    total_shareholders_equity FLOAT8,
    -- Not including minority interests again
    CONSTRAINT fk_financial_report
        FOREIGN KEY(financial_report_id)
        REFERENCES sbux_financial_reports(id)
);
