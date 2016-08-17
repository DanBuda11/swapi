import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		climate: '',
		diameter: '',
		gravity: '',
		name: '',
		orbital_period: '',
		population: '',
		residents: [],
		rotation_period: '',
		surface_water: '',
		terrain: ''
	},
	idAttribute: 'id',
	url: function() {
		return 'http://swapi.co/api/planets/'+this.id+'/'
	}
});