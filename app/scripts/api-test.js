import React from 'react';
import Planets from './collections/Planets.js';
import Planet from './models/Planet.js';
import People from './collections/People.js';
import Person from './models/Person.js';

export default React.createClass({
	getInitialState: function() {
		return {
			planet: new Planet({id: '1'}),
			person: new Person({id: '1'})
		};
	},
	componentDidMount: function() {
		this.state.planet.fetch();
		this.state.person.fetch();
		this.state.planet.on('change', this.planetChange);
		this.state.person.on('change', this.personChange);

	},
	componentWillUnmount: function() {
		this.state.planet.off('change', this.planetChange);
		this.state.person.off('change', this.personChange);
	},
	planetChange: function(updatedPlanet) {
		this.setState({planet: updatedPlanet});
	},
	personChange: function(updatedPerson) {
		this.setState({person: updatedPerson});
	},
	render: function() {
		return (
			<div>
				<h3>Planet Info Request</h3>
				<p>{this.state.planet.get('name')}</p>
				<p>{this.state.planet.get('climate')}</p>
				<p>{this.state.planet.get('diameter')}</p>
				<p>{this.state.planet.get('population')}</p>
				<p>{this.state.planet.get('terrain')}</p>
				<p>{this.state.planet.get('surface_water')}</p>
				<p>{this.state.planet.get('gravity')}</p>
				<p>{this.state.planet.get('orbital_period')}</p>
				<h3>Person Info Request</h3>
				<p>{this.state.person.get('birth_year')}</p>
				<p>{this.state.person.get('eye_color')}</p>
				<p>{this.state.person.get('name')}</p>
				<p>{this.state.person.get('homeworld')}</p>
				<p>{this.state.person.get('gender')}</p>
			</div>
		);
	}
});