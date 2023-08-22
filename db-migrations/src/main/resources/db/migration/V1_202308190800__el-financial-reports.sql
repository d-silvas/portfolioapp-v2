CREATE TABLE public.el_financial_reports (
    id SERIAL PRIMARY KEY,
    period VARCHAR,
    calendar_year INTEGER,
    end_date DATE,
    publication_date DATE
);

INSERT INTO public.el_financial_reports (
    id,
    period,
    calendar_year,
    end_date,
    publication_date
) VALUES
    (1,'full',2023,'2023-06-30','2023-08-18'),
    (2,'full',2022,'2022-06-30','2022-08-24'),
    (3,'full',2021,'2021-06-30','2021-08-27'),
    (4,'full',2020,'2020-06-30','2020-08-28'),
    (5,'full',2019,'2019-06-30','2019-08-23'),
    (6,'full',2018,'2018-06-30','2018-08-24'),
    (7,'full',2017,'2017-06-30','2017-08-25'),
    (8,'full',2016,'2016-06-30','2016-08-24'),
    (9,'full',2015,'2015-06-30','2015-08-20'),
    (10,'full',2014,'2014-06-30','2014-08-20'),
    (11,'full',2013,'2013-06-30','2013-08-23'),
    (12,'full',2012,'2012-06-30','2012-08-17');
