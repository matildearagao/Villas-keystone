var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'villas';
	
	locals.data = {
		villas: [],
		features: [],

	};



	// Load all features
	// view.on('init', function (next) {
	// 	keystone.list('Features').model.find().exec(function (err, results) {
	// 		locals.data.features = results;
	// 		console.log(features);

	// 	});
	// });



	// Load other villas
	view.query('villas', keystone.list('Villa').model.find());


	// Render the view
	view.render('villas');
};
