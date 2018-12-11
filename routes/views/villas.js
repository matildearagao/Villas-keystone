var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'villas';
	locals.data = {
		villas: [],
	};

	

	// Load the posts
	view.query('villas', keystone.list('Villa').model.find());


	// Render the view
	view.render('villas');
};
