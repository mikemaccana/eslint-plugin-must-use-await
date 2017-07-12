var rule = require('../../../lib/rules/must-use-await'),
	RuleTester = require('eslint').RuleTester;

const IDENTIFIER_ERROR = {
	message: `Use 'await' rather than using callbacks and then()`,
	type: `Identifier`
}

const FUNCTION_EXPRESSION_ERROR = {
	message: `Use 'await' rather than using callbacks and then()`,
	type: `FunctionExpression`
}

var ruleTester = new RuleTester();
ruleTester.run('must-use-await', rule, {
	valid: [
		`function foo(){}`,
		`try {
			doThing()
		} catch(err) {
			log('Oh no!', err.message)
		}`,
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
		},
		{
			code: `doThing(function(err){})`,
			errors: [FUNCTION_EXPRESSION_ERROR]
		}
	]
});