USE sakila;

SELECT act.actor_id, 
CONCAT(act.first_name, ' ', act.last_name)  `actor_fullname`,
fa.film_id, title
FROM film_actor `fa`
INNER JOIN actor `act`
ON fa.actor_id = act.actor_id
INNER JOIN film `fi`
ON fa.film_id = fi.film_id;
