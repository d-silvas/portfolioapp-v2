-- We make assumptions on whole years only
-- We leave quarterly assumptions for the future
CREATE TABLE public.sbux_assumptions (
    id SERIAL PRIMARY KEY,
    assumption_date DATE,
    year_from INTEGER,
    year_to INTEGER,
    north_america_revenue_per_store_grotwh_perc_base FLOAT8,
    north_america_revenue_per_store_grotwh_perc_bull FLOAT8,
    north_america_revenue_per_store_grotwh_perc_bear FLOAT8,
    north_america_num_stores_growth_perc_base FLOAT8,
    north_america_num_stores_growth_perc_bull FLOAT8,
    north_america_num_stores_growth_perc_bear FLOAT8,
    international_revenue_per_store_growth_base FLOAT8,
    international_revenue_per_store_growth_bull FLOAT8,
    international_revenue_per_store_growth_bear FLOAT8,
    international_num_stores_growth_perc_base FLOAT8,
    international_num_stores_growth_perc_bull FLOAT8,
    international_num_stores_growth_perc_bear FLOAT8,
    channel_development_revenue_growth_perc_base FLOAT8,
    channel_development_revenue_growth_perc_bull FLOAT8,
    channel_development_revenue_growth_perc_bear FLOAT8,
    other_revenues FLOAT8
);

INSERT INTO public.sbux_assumptions (
    id,
    assumption_date,
    year_from,
    year_to,
    north_america_revenue_per_store_grotwh_perc_base,
    north_america_revenue_per_store_grotwh_perc_bull,
    north_america_revenue_per_store_grotwh_perc_bear,
    north_america_num_stores_growth_perc_base,
    north_america_num_stores_growth_perc_bull,
    north_america_num_stores_growth_perc_bear,
    international_revenue_per_store_growth_base,
    international_revenue_per_store_growth_bull,
    international_revenue_per_store_growth_bear,
    international_num_stores_growth_perc_base,
    international_num_stores_growth_perc_bull,
    international_num_stores_growth_perc_bear,
    channel_development_revenue_growth_perc_base,
    channel_development_revenue_growth_perc_bull,
    channel_development_revenue_growth_perc_bear,
    other_revenues
) VALUES (
    1, -- id
    '2022-07-31', -- assumption_date
    2022, -- year_from
    2023, -- year_to
    6, -- north_america_revenue_per_store_grotwh_perc_base
    8, -- north_america_revenue_per_store_grotwh_perc_bull
    4, -- north_america_revenue_per_store_grotwh_perc_bear
    2, -- north_america_num_stores_growth_perc_base
    2.5, -- north_america_num_stores_growth_perc_bull
    0.5, -- north_america_num_stores_growth_perc_bear
    6, -- international_revenue_per_store_growth_base
    8, -- international_revenue_per_store_growth_bull
    4, -- international_revenue_per_store_growth_bear
    8, -- international_num_stores_growth_perc_base
    10, -- international_num_stores_growth_perc_bull
    6, -- international_num_stores_growth_perc_bear
    3, -- channel_development_revenue_growth_perc_base
    4, -- channel_development_revenue_growth_perc_bull
    2, -- channel_development_revenue_growth_perc_bear
    100000000 -- other_revenues
), (
    2, -- id
    '2022-07-31', -- assumption_date
    2023, -- year_from
    2024, -- year_to
    4, -- north_america_revenue_per_store_grotwh_perc_base
    6, -- north_america_revenue_per_store_grotwh_perc_bull
    3, -- north_america_revenue_per_store_grotwh_perc_bear
    2, -- north_america_num_stores_growth_perc_base
    2.5, -- north_america_num_stores_growth_perc_bull
    0.5, -- north_america_num_stores_growth_perc_bear
    4, -- international_revenue_per_store_growth_base
    6, -- international_revenue_per_store_growth_bull
    3, -- international_revenue_per_store_growth_bear
    8, -- international_num_stores_growth_perc_base
    10, -- international_num_stores_growth_perc_bull
    6, -- international_num_stores_growth_perc_bear
    3, -- channel_development_revenue_growth_perc_base
    4, -- channel_development_revenue_growth_perc_bull
    2, -- channel_development_revenue_growth_perc_bear
    100000000 -- other_revenues
), (
    3, -- id
    '2022-07-31', -- assumption_date
    2024, -- year_from
    2025, -- year_to
    3, -- north_america_revenue_per_store_grotwh_perc_base
    4, -- north_america_revenue_per_store_grotwh_perc_bull
    2, -- north_america_revenue_per_store_grotwh_perc_bear
    2, -- north_america_num_stores_growth_perc_base
    2.5, -- north_america_num_stores_growth_perc_bull
    0.5, -- north_america_num_stores_growth_perc_bear
    3, -- international_revenue_per_store_growth_base
    4, -- international_revenue_per_store_growth_bull
    2, -- international_revenue_per_store_growth_bear
    8, -- international_num_stores_growth_perc_base
    10, -- international_num_stores_growth_perc_bull
    6, -- international_num_stores_growth_perc_bear
    6, -- channel_development_revenue_growth_perc_base
    8, -- channel_development_revenue_growth_perc_bull
    4, -- channel_development_revenue_growth_perc_bear
    100000000 -- other_revenues
), (
    4, -- id
    '2022-07-31', -- assumption_date
    2025, -- year_from
    2026, -- year_to
    3, -- north_america_revenue_per_store_grotwh_perc_base
    4, -- north_america_revenue_per_store_grotwh_perc_bull
    2, -- north_america_revenue_per_store_grotwh_perc_bear
    1, -- north_america_num_stores_growth_perc_base
    2, -- north_america_num_stores_growth_perc_bull
    0.5, -- north_america_num_stores_growth_perc_bear
    3, -- international_revenue_per_store_growth_base
    4, -- international_revenue_per_store_growth_bull
    2, -- international_revenue_per_store_growth_bear
    8, -- international_num_stores_growth_perc_base
    10, -- international_num_stores_growth_perc_bull
    6, -- international_num_stores_growth_perc_bear
    3, -- channel_development_revenue_growth_perc_base
    4, -- channel_development_revenue_growth_perc_bull
    2, -- channel_development_revenue_growth_perc_bear
    100000000 -- other_revenues
), (
    5, -- id
    '2022-07-31', -- assumption_date
    2026, -- year_from
    2027, -- year_to
    3, -- north_america_revenue_per_store_grotwh_perc_base
    4, -- north_america_revenue_per_store_grotwh_perc_bull
    2, -- north_america_revenue_per_store_grotwh_perc_bear
    1, -- north_america_num_stores_growth_perc_base
    2, -- north_america_num_stores_growth_perc_bull
    0.5, -- north_america_num_stores_growth_perc_bear
    3, -- international_revenue_per_store_growth_base
    4, -- international_revenue_per_store_growth_bull
    2, -- international_revenue_per_store_growth_bear
    6, -- international_num_stores_growth_perc_base
    8, -- international_num_stores_growth_perc_bull
    4, -- international_num_stores_growth_perc_bear
    3, -- channel_development_revenue_growth_perc_base
    4, -- channel_development_revenue_growth_perc_bull
    2, -- channel_development_revenue_growth_perc_bear
    100000000 -- other_revenues
), (
    6, -- id
    '2022-07-31', -- assumption_date
    2027, -- year_from
    2028, -- year_to
    3, -- north_america_revenue_per_store_grotwh_perc_base
    4, -- north_america_revenue_per_store_grotwh_perc_bull
    2, -- north_america_revenue_per_store_grotwh_perc_bear
    1, -- north_america_num_stores_growth_perc_base
    2, -- north_america_num_stores_growth_perc_bull
    0.5, -- north_america_num_stores_growth_perc_bear
    3, -- international_revenue_per_store_growth_base
    4, -- international_revenue_per_store_growth_bull
    2, -- international_revenue_per_store_growth_bear
    6, -- international_num_stores_growth_perc_base
    8, -- international_num_stores_growth_perc_bull
    4, -- international_num_stores_growth_perc_bear
    3, -- channel_development_revenue_growth_perc_base
    4, -- channel_development_revenue_growth_perc_bull
    2, -- channel_development_revenue_growth_perc_bear
    100000000 -- other_revenues
), (
    7, -- id
    '2022-07-31', -- assumption_date
    2028, -- year_from
    2029, -- year_to
    3, -- north_america_revenue_per_store_grotwh_perc_base
    4, -- north_america_revenue_per_store_grotwh_perc_bull
    2, -- north_america_revenue_per_store_grotwh_perc_bear
    1, -- north_america_num_stores_growth_perc_base
    1, -- north_america_num_stores_growth_perc_bull
    0.5, -- north_america_num_stores_growth_perc_bear
    3, -- international_revenue_per_store_growth_base
    4, -- international_revenue_per_store_growth_bull
    2, -- international_revenue_per_store_growth_bear
    6, -- international_num_stores_growth_perc_base
    8, -- international_num_stores_growth_perc_bull
    4, -- international_num_stores_growth_perc_bear
    3, -- channel_development_revenue_growth_perc_base
    4, -- channel_development_revenue_growth_perc_bull
    2, -- channel_development_revenue_growth_perc_bear
    100000000 -- other_revenues
);