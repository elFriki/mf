import DS from 'ember-data';

export default DS.Model.extend({
	displayName: DS.attr('string'),
	uid: DS.attr('string'),
	email: DS.attr('email'),
	emailVerified: DS.attr('boolean')

});