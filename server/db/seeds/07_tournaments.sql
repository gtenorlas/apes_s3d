INSERT INTO tournaments (
  start_date,
  end_date,
  description,
  title,
  prizes,
  sponsors,
  tournament_type_id,
  thumbnail,
  winner,
  runner_up
)
VALUES
(
    '2023-02-01 08:00:00 PST',
    '2023-02-04 08:00:00 PST',
    'February Accumulative War Points Tournament',
    'Febuary Total War Points Tournament',
    '$100 for most points',
    'Jackmindster',
    1,
    '022023_tournament.png',
    null,
    null
  ),
  (
    '2023-02-01 08:00:00 PST',
    '2023-02-04 08:00:00 PST',
    'February Elimination Tournament',
    'Febuary Elemintation Tournament',
    '$100 for last person standing',
    'Jackmindster',
    2,
    '022023_tournament.png',
    null,
    null
  );
