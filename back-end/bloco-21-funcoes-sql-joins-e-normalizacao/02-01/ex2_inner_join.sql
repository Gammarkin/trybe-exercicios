-- staff e address 
-- nome sobrenome endereço

USE sakila; 

SELECT
st.first_name,
st.last_name,
ad.address
FROM
staff `st`
INNER JOIN
address `ad` ON ad.address_id = st.address_id;

