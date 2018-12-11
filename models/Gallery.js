var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Gallery.add({
	name: { type: String, required: true },
	images: { type: Types.CloudinaryImages },
	
});
Gallery.relationship({ ref: 'Villa', path: 'villas', refPath: 'galleries' });


Gallery.register();
