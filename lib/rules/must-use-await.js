var log = console.log.bind(console),
	_ = require('lodash');

const MESSAGE = `Use 'await' rather than using callbacks and then()`

module.exports = function(context) {

	const BAD_NAMES = ['cb', 'callback', 'done', 'then']

	return {
		"Identifier": function(node) {
			if (
				BAD_NAMES.includes(node.name)
			) {
				context.report(node, MESSAGE);
			}
		},
		// We can't just catch 'err' identifiers, as that would include using catch()!
		"FunctionExpression": function(node){
			var firstArg = _.get(node, 'params.0')
			if ( firstArg ) {
				firstArg.name === 'err'
				context.report(node, MESSAGE);
			}
		}
	};

};

module.exports.schema = [];