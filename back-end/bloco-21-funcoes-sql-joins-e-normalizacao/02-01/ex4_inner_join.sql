USE sakila; 

SELECT cust.first_name, cust.email, cust.address_id,
ad.address, ad.district FROM customer `cust`
INNER JOIN address `ad`
ON ad.address_id = cust.address_id
WHERE cust.first_name LIKE '%rene%'
AND ad.district = 'California';
