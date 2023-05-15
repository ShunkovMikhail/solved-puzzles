SELECT (yr + 99) / 100 AS century FROM years;

// ----------- other-solutions -----------

SELECT 
  DATE_PART('century', MAKE_DATE(yr, 1, 1)) AS century
FROM years;
