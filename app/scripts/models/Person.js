import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		birth_year: '',
		eye_color: '',
		gender: '',
		homeworld: '',
		name: '',
		species: []
	},
	idAttribute: 'id',
	url: function() {
		return 'http://swapi.co/api/people/'+this.id+'/'
	}
});