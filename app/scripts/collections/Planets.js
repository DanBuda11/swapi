import Backbone from 'backbone';
import Planet from './../models/Planet.js';

const Planets = Backbone.Collection.extend({
	model: Planet,
	url: '//swapi.co/api/planets'
});

export default new Planets();