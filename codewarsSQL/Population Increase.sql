CREATE TABLE population_y1 (
country VARCHAR(255),
y1 FLOAT,
PRIMARY KEY (country)
);

CREATE TABLE population_y2 (
country VARCHAR(255),
y2 FLOAT,
PRIMARY KEY (country)
);



INSERT INTO population_y1 (country, y1)
SELECT country, MIN(population)
FROM world_population
WHERE year = 2000
GROUP BY country;

INSERT INTO population_y2 (country, y2)
SELECT country, MAX(population)
FROM world_population
WHERE year = 2020
GROUP BY country;



CREATE TABLE res AS (
SELECT DISTINCT world_population.country,
((population_y2.y2 - population_y1.y1) / 1000000)
AS population_increase
FROM ((world_population
INNER JOIN population_y1 ON world_population.country = population_y1.country)
INNER JOIN population_y2 ON world_population.country = population_y2.country))
ORDER BY population_increase DESC;



SELECT country, to_char(population_increase, 'FM999999999.00 M')
AS population_increase
FROM res
LIMIT 5;



// ----------- other-solutions -----------

select p2.country, to_char((p2.population - p1.population)::numeric / 1000000, 'FM9999999999.00') || ' M' as population_increase from world_population p2
join world_population p1 using (country)
where p1.year = 2000 and p2.year = 2020
order by p2.population - p1.population desc
limit 5
