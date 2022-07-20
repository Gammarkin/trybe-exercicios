-- id do cliente, nome e email, 
-- id do endereço e o nome da rua
-- customer e address
-- 100 clientes, ordenados pelo nome em ordem decrescente

USE sakila;

SELECT
cust.customer_id,
cust.first_name,
cust.email,
cust.address_id,
ad.address
FROM
customer `cust`
INNER JOIN
address `ad` ON ad.address_id = cust.address_id;
