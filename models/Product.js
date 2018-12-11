var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product', {
    map: {name: 'title'},
    singular: 'Product',
    plural: 'Products',
    autokey: {path: 'slug', from: 'title', unique: true} //create slug based on title 
});

//product fields
Product.add({
    title: {type: String, required: true},
    price: {type: Number},
    qty: {type: Number},
    description: {type: Types.Html, wysiwyg: false, height: 300},
    image: {type: Types.CloudinaryImage},
    publishedDate: {type: Date, default: Date.now},
});

//register model
Product.register();