var rule = require('../../../lib/rules/must-use-await'),
	RuleTester = require('eslint').RuleTester;

const IDENTIFIER_ERROR = {
	message: `Use 'await' rather than using callbacks and then()`,
	type: `Identifier`
}

var ruleTester = new RuleTester();
ruleTester.run('must-use-await', rule, {
	valid: [
		`function foo(){}`,
	],
	invalid: [
		{
			code: `function foo(yolo, swag, cb){}`,
			errors: [IDENTIFIER_ERROR]
		},
		{
			code: `function foo(banana, grape, done){}`,
			errors: [IDENTIFIER_ERROR]
		},
		{
			code: `function foo(callback){}`,
			errors: [IDENTIFIER_ERROR]
		},
		{
			code: `foo.then(function(){})`,
			errors: [IDENTIFIER_ERROR]
		}
	]
});