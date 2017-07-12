# eslint-plugin-must-use-await

Flags use of callback functions and .then(), for users of ES2017's async/await

[![CircleCI](https://circleci.com/gh/mikemaccana/eslint-must-use-await.svg?style=svg)](https://circleci.com/gh/mikemaccana/eslint-must-use-await)

This plugin catches:

  - Functions that have options including common callback identifiers, like `cb`, `callback` and `done`.
  - The old pre-ES2017 `.then()` syntax
  - Invocations of `err`-first functions

All of which you can and should replace with `async/await`.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-must-use-await`:

```
$ npm install eslint-plugin-must-use-await --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-must-use-await` globally.

## Usage

Add `must-use-await` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "must-use-await"
    ]
}
```


Then configure the rules you want to use under the rules section.

Magic numbers: `1` is warn, `2` is error.

```json
{
    "rules": {
        "must-use-await/must-use-await": 1,
    }
}
```

## Supported Rules

* must-use-await - will warn on use of callback, cb, done or .then()





