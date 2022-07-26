USE sakila;

SELECT
sta.first_name,
sta.last_name,
AVG(pay.amount) `average_payment`
FROM 
staff `sta`
INNER JOIN
payment `pay` ON sta.staff_id = pay.staff_id
WHERE
YEAR(pay.payment_date) = 2006
GROUP BY
sta.staff_id;