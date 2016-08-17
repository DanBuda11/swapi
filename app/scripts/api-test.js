import React from 'react';
import Planets from './collections/Planets.js';
import Planet from './models/Planet.js';

export default React.createClass({
	getInitialState: function() {
		return {
			planet: new Planet({id: '1'})
		};
	},
	componentDidMount: function() {
		this.state.planet.fetch();
		this.state.planet.on('change', this.modelChange);

	},
	componentWillUnmount: function() {
		this.state.planet.off('change', this.modelChange);
	},
	modelChange: function(updatedPlanet) {
		this.setState({planet: updatedPlanet});
	},
	render: function() {
		return (
			<div>
				<p>{this.state.planet.get('name')}</p>
				<p>{this.state.planet.get('climate')}</p>
				<p>{this.state.planet.get('diameter')}</p>
				<p>{this.state.planet.get('population')}</p>
				<p>{this.state.planet.get('terrain')}</p>
				<p>{this.state.planet.get('surface_water')}</p>
				<p>{this.state.planet.get('gravity')}</p>
				<p>{this.state.planet.get('orbital_period')}</p>
			</div>
		);
	}
});