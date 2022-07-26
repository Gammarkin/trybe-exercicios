import React, { Component } from "react";
import PropTypes from "prop-types";

class Pokemon extends Component {
	render() {
		const {
			pokemon: { name, type, averageWeight, image },
		} = this.props;
		return (
			<div className="pokemon">
				<div>
					<p>{name}</p>
					<p>{type}</p>
					<p>
						{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
					</p>
				</div>
				<img src={image} alt={`${name} sprite`} />
			</div>
		);
	}
}

Pokemon.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		averageWeight: PropTypes.shape({
			measurementUnit: PropTypes.string.isRequired,
			value: PropTypes.number.isRequired,
		}),
		image: PropTypes.string.isRequired,
	}).isRequired,
};

export default Pokemon;
