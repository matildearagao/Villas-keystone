var keystone = require('keystone');

//make module avaiable outside this file
exports = module.exports = function(req, res){
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //set locals
    locals.section = 'store'; //menu name

    //load products & grab products
    view.query('products', keystone.list('Product').model.find());

    //render view
    view.render('products');

}