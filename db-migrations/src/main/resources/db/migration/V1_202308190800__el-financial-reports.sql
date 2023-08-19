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
    (3,'full',2021,'2021-06-30','2021-08-27');
