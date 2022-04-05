import React, { Component } from "react";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
	render() {
		const { pokemons } = this.props;
		return (
			<div className="pokedex">
				{pokemons.map((e) => (
					<Pokemon key={e.id} pokemon={e} />
				))}
			</div>
		);
	}
}

export default Pokedex;
