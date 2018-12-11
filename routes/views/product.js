var keystone = require('keystone');

//make module avaiable outside this file
exports = module.exports = function(req, res){
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //set locals
    locals.section = 'store'; //menu name
    locals.filters = {
        product: req.params.product  //slug
    }
    locals.data = {
        products: []
    }

   view.on('init', function(next){
       var q = keystone.list('Product').model.findOne({
           slug: locals.filters.product
       });

       q.exec(function(err, result){
           locals.data.product = result;
           next(err);
       });
   });

    //render view
    view.render('product');

}