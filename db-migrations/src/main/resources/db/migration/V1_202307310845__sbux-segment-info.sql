CREATE TABLE public.sbux_segment_info (
    id SERIAL PRIMARY KEY,
    financial_report_id INTEGER UNIQUE,
    north_america_revenues FLOAT8,
    north_america_num_stores FLOAT8,
    international_revenues FLOAT8,
    international_num_stores FLOAT8,
    channel_development_revenues FLOAT8,
    other_revenues FLOAT8,
    CONSTRAINT fk_financial_report
        FOREIGN KEY(financial_report_id)
        REFERENCES sbux_financial_reports(id)
);

INSERT INTO public.sbux_segment_info (
    id,
    financial_report_id,
    north_america_revenues,
    north_america_num_stores,
    international_revenues,
    international_num_stores,
    channel_development_revenues,
    other_revenues
) VALUES (
    1, -- id,
    1, -- financial_report_id,
    23370800000, -- north_america_revenues,
    17295, -- north_america_num_stores,
    6940100000, -- international_revenues,
    18416, -- international_num_stores,
    1844000000, -- channel_development_revenues,
    96000000 -- other_revenues
), (
    2, -- id,
    2, -- financial_report_id,
    20447900000, -- north_america_revenues,
    16826, -- north_america_num_stores,
    6921600000, -- international_revenues,
    17007, -- international_num_stores,
    1594000000, -- channel_development_revenues,
    97000000 -- other_revenues
), (
    3, -- id,
    3, -- financial_report_id,
    16296200000, -- north_america_revenues,
    18354, -- north_america_num_stores,
    5230600000, -- international_revenues,
    14306, -- international_num_stores,
    1925000000, -- channel_development_revenues,
    66000000 -- other_revenues
), (
    4, -- id,
    4, -- financial_report_id,
    18259000000, -- north_america_revenues,
    18067, -- north_america_num_stores,
    6190700000, -- international_revenues,
    13189, -- international_num_stores,
    1993000000, -- channel_development_revenues,
    66000000 -- other_revenues
), (
    5, -- id,
    5, -- financial_report_id,
    16748600000, -- north_america_revenues,
    17454, -- north_america_num_stores,
    5551200000, -- international_revenues,
    11850, -- international_num_stores,
    2297000000, -- channel_development_revenues,
    122000000 -- other_revenues
), (
    6, -- id,
    6, -- financial_report_id,
    15652700000, -- north_america_revenues,
    16559, -- north_america_num_stores,
    4253900000, -- international_revenues,
    10453, -- international_num_stores,
    2009000000, -- channel_development_revenues,
    472000000 -- other_revenues
), (
    7, -- id,
    7, -- financial_report_id,
    14795400000, -- north_america_revenues,
    15607, -- north_america_num_stores,
    4063700000, -- international_revenues,
    9085, -- international_num_stores,
    1933000000, -- channel_development_revenues,
    524000000 -- other_revenues
), (
    8, -- id,
    8, -- financial_report_id,
    13293400000, -- north_america_revenues,
    14803, -- north_america_num_stores,
    3612600000, -- international_revenues,
    7824, -- international_num_stores,
    1731000000, -- channel_development_revenues,
    526000000 -- other_revenues
), (
    9, -- id,
    9, -- financial_report_id,
    11980500000, -- north_america_revenues,
    14191, -- north_america_num_stores,
    2424400000, -- international_revenues,
    6764, -- international_num_stores,
    1546000000, -- channel_development_revenues,
    497000000 -- other_revenues
);