# eslint-plugin-must-use-await

Flags use of callback functions and .then(), for users of ES2017's async/await

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

```json
{
    "rules": {
        "must-use-await/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





