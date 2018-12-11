var keystone = require('keystone');
var Types = keystone.Field.Types;

//create Keystone list
var Villa = new keystone.List('Villa', {
    map: {name: 'title'},
    singular: 'Villa',
    plural: 'Villas',
    autokey: {path: 'slug', from: 'title', unique: true} //create slug based on title 
});

//Create product fields
Villa.add({
    title: {type: String, required: true},
    subtitle: {type: String},
    shortDescription: {type: Types.Html, wysiwyg: true, height: 300},
    longDescription: {type: Types.Html, height: 600},
    // mainFeatures:{type: Types.Relationship, ref: 'Features', many: true},

    features: {type: Types.Relationship, ref: 'Features', many: true},
    image: { type: Types.CloudinaryImage },
    galleries: { type: Types.Relationship, ref: 'Gallery', many: false},

});

//register model
Villa.register();



