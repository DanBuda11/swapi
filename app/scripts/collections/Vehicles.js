import Backbone from 'backbone';
import Vehicle from './../models/Vehicle.js';

const Vehicles = Backbone.Collection.extend({
	model: Vehicle,
	url: '//swapi.co/api/vehicles'
});

export default new Vehicles();