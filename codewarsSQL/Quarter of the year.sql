-- # write your SQL statement here: you are given a table 'quarterof' with column 'month', return a table with column 'month' and your result in a column named 'res'.
SELECT month, CAST (EXTRACT (QUARTER FROM MAKE_DATE (2007,month,25)) AS INT) AS res FROM quarterof;

// ----------- other-solutions -----------

-rymsk-21

SELECT month,
  CASE
    WHEN month BETWEEN 1 and 3 THEN 1
    WHEN month BETWEEN 4 and 6 THEN 2
    WHEN month BETWEEN 7 and 9 THEN 3
    WHEN month BETWEEN 10 and 12 THEN 4
    END AS res
FROM
  quarterof
WHERE  month BETWEEN 1 and 12;

-brtkeee

-- # write your SQL statement here: you are given a table 'quarterof' with column 'month', return a table with column 'month' and your result in a column named 'res'.
SELECT month,
    CASE 
      WHEN month IN(1,2,3) THEN 1 
      WHEN month IN(4,5,6) THEN 2 
      WHEN month IN(7,8,9) THEN 3 
      WHEN month IN(10,11,12) THEN 4 
    END AS res
FROM quarterof
WHERE month BETWEEN 1 AND 12; 
