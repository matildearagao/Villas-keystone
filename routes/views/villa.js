var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

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
	view.query('villas', keystone.list('Villa').model.find());

	view.on('init', function (next) {

			keystone.list('Gallery').model.findOne({ key: locals.filters.galleries }).exec(function (err, result) {
				locals.data.galleries = result;
				next(err);
			});
		
	});
	// 	view.query('galleries', keystone.list('Gallery').model.findOne({ name: 'villa1' }));

	// features
			view.query('features', keystone.list('Features').model.find());



	//render view
	view.render('villa');
}