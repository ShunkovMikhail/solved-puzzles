SELECT (SELECT MAX(v)
FROM (VALUES
(a * (b + c)),
((a * b) + c),
(a + (b * c)),
((a + b) * c),
(a * (b * c)),
((a * b) * c),
(a + b + c)
) AS value(v)) AS res FROM expression_matter;

// ----------- other-solutions -----------

SELECT GREATEST( a+b+c, (a+b)*c, a*(b+c), a*b*c ) 
AS res FROM expression_matter;
