var log = console.log.bind(console);

module.exports = function(context) {

	const BAD_NAMES = ['cb', 'callback', 'done', 'then', 'err']

	return {
		"Identifier": function(node) {
			if (
				BAD_NAMES.includes(node.name)
			) {
				context.report(node, `Use 'await' rather than using callbacks and then()`);
			}
		}
	};

};

module.exports.schema = [];