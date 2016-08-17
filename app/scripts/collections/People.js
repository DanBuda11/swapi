import Backbone from 'backbone';
import Person from './../models/Person.js';

const People = Backbone.Collection.extend({
	model: Person,
	url: '//swapi.co/api/people'
});

export default new People();