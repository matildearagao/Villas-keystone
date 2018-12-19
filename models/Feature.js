// var keystone = require('keystone');
// var Types = keystone.Field.Types;


// /**
//  * Feature Model
//  * ==================
//  */

// var Feature = new keystone.List('Feature', {
// 	autokey: { from: 'name', path: 'key', unique: true },
// });

// Feature.add({
// 	name: { type: String, required: true },
// });

// Feature.relationship({ ref: 'Villa', path: 'villas', refPath: 'features' });

// Feature.register();
