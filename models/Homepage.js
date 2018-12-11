var keystone = require('keystone');
var Types = keystone.Field.Types;

var Homepage = new keystone.List('Homepage', {
    singleton: true,
    nodelete: true,
});

//product fields
Homepage.add({
    title: {type: String, required: true, default: 'Homepage'},
    shortDescription: {type: String},
    description: {type: Types.Html, wysiwyg: false, height: 300},
    image: {type: Types.CloudinaryImage},
});

//register model
Homepage.register();