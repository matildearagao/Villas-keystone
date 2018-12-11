var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder'));
	// view.query('galleries', keystone.list('Gallery').model.findOne({ name: 'villa1' }));


	//set locals
	locals.section = 'villas'; //menu name
	locals.filters = {
		villa: req.params.villa  //slug
	}
	locals.data = {
		villas: []
	};

	view.on('init', function (next) {
		var q = keystone.list('Villa').model.findOne({
			slug: locals.filters.villa
		});

		q.exec(function (err, result) {
			locals.data.villa = result;
			next(err);
		});
	});

	// Load other villas
	view.on('init', function (next) {
		var q = keystone.list('Villa').model.find();

		q.exec(function (err, result) {
			locals.data.villas = result;
			next(err);
		});
	});

	//render view
	view.render('villa');
}