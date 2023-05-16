SELECT id, hours, FLOOR(hours * 0.5) AS liters FROM cycling;

// ----------- other-solutions -----------

SELECT
  c.id,
  c.hours,
  FLOOR(0.5 * c.hours) AS liters
FROM 
  cycling AS c
  
  
