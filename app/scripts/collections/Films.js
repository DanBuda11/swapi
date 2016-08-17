import Backbone from 'backbone';
import Film from './../models/Film.js';

const Filmss = Backbone.Collection.extend({
	model: Film,
	url: '//swapi.co/api/films'
});

export default new Films();