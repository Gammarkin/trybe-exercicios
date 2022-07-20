USE sakila;

SELECT
	act.actor_id,
	act.first_name,
	fil.film_id,
	fil.title
FROM
	actor `act`
INNER JOIN
	film_actor `fil_act` ON fil_act.actor_id = act.actor_id
INNER JOIN
	film `fil` ON fil.film_id = fil_act.film_id;