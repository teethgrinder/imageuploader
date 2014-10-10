var Stats = require('./stats'), Images = require('./images'), Comments = require('./comments');
console.log(Stats.images);
module.exports = function (viewModel, callback) {

	viewModel.sidebar = {
		stats: Stats(),
		popular: Images.popular(),
		comments: Comments.newest()
	};

	callback(null, viewModel);
};