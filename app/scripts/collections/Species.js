import Backbone from 'backbone';
import Specie from './../models/Specie.js';

const Species = Backbone.Collection.extend({
	model: Specie,
	url: '//swapi.co/api/species'
});

export default new Species();