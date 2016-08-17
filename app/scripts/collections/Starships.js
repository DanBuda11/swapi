import Backbone from 'backbone';
import Starship from './../models/Starship.js';

const Starships = Backbone.Collection.extend({
	model: Starship,
	url: '//swapi.co/api/starships'
});

export default new Starships();