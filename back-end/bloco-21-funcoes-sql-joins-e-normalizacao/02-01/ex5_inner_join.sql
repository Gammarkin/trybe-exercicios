USE sakila;

SELECT 
cust.first_name, 
COUNT(cust.address_id) `clientes_cadastrados`
FROM
customer `cust`
INNER JOIN
address `ad` ON cust.address_id = ad.address_id
WHERE
cust.active = 1
GROUP BY
cust.customer_id
ORDER BY
first_name DESC,
last_name DESC;