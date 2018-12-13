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

	//gallery
	// view.query('galleries', keystone.list('Gallery').model.findOne({name : 'villa1'}).populate('images'));

	view.on('init', function (next) {
        var q = keystone.list('Gallery').model.findOne().populate('images');

        q.exec(function (err, result) {
            locals.data.gallery = result;
            next(err);
        });
	});
	


	// // features
	// view.query('features', keystone.list('Feature').model.find().populate('images'));



	//render view
	view.render('villa');
}