/* Copyright © Inertia Lighting | All Rights Reserved */

//---------------------------------------------------------------------------------------------------------------//

'use strict';

//---------------------------------------------------------------------------------------------------------------//

module.exports = {
    'env': {
        'browser': false,
        'node': true,
        'commonjs': true,
        'es2021': true
    },
    'extends': 'eslint:recommended',
    'parser': '@babel/eslint-parser',
    'parserOptions': {
        'ecmaVersion': 12,
        'requireConfigFile': false,
        'sourceType': 'script',
    },
    'rules': {
        'accessor-pairs': 'error',
        'array-bracket-newline': 'off',
        'array-bracket-spacing': 'off',
        'array-callback-return': 'error',
        'array-element-newline': 'off',
        'arrow-body-style': 'error',
        'arrow-parens': 'off',
        'arrow-spacing': [
            'error',
            {
                'after': true,
                'before': true
            }
        ],
        'block-scoped-var': 'error',
        'block-spacing': 'error',
        'brace-style': [
            'error',
            '1tbs'
        ],
        'camelcase': 'off',
        'capitalized-comments': 'off',
        'class-methods-use-this': 'error',
        'comma-dangle': 'off',
        'comma-spacing': [
            'error',
            {
                'after': true,
                'before': false
            }
        ],
        'comma-style': [
            'error',
            'last'
        ],
        'complexity': 'off',
        'computed-property-spacing': [
            'error',
            'never'
        ],
        'consistent-return': 'off',
        'consistent-this': 'error',
        'curly': 'off',
        'default-case': 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-location': 'error',
        'dot-notation': 'error',
        'eol-last': 'error',
        'eqeqeq': 'error',
        'func-call-spacing': 'error',
        'func-name-matching': 'error',
        'func-names': 'error',
        'func-style': [
            'error',
            'declaration',
            {
                'allowArrowFunctions': true
            }
        ],
        'function-call-argument-newline': [
            'error',
            'consistent'
        ],
        'function-paren-newline': 'off',
        'generator-star-spacing': 'error',
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'error',
        'id-denylist': 'error',
        'id-length': 'off',
        'id-match': 'error',
        'implicit-arrow-linebreak': 'off',
        'indent': 'off',
        'init-declarations': 'off',
        'jsx-quotes': 'error',
        'key-spacing': 'error',
        'keyword-spacing': [
            'error',
            {
                'after': true,
                'before': true
            }
        ],
        'line-comment-position': 'off',
        'linebreak-style': [
            'error',
            'windows'
        ],
        'lines-around-comment': 'off',
        'lines-between-class-members': 'error',
        'max-classes-per-file': 'error',
        'max-depth': 'error',
        'max-len': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'error',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'error',
        'multiline-comment-style': [
            'error',
            'separate-lines'
        ],
        'multiline-ternary': [
            'error',
            'never'
        ],
        'new-parens': 'error',
        'newline-per-chained-call': 'off',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-await-in-loop': 'off',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-confusing-arrow': 'off',
        'no-console': 'off',
        'no-constructor-return': 'error',
        'no-continue': 'off',
        'no-div-regex': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'off',
        'no-empty': [
            'error',
            {
                'allowEmptyCatch': true
            }
        ],
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': 'off',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': 'off',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-loss-of-precision': 'error',
        'no-magic-numbers': 'off',
        'no-mixed-operators': [
            'error',
            {
                'allowSamePrecedence': true
            }
        ],
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'off',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-plusplus': [
            'error',
            {
                'allowForLoopAfterthoughts': true
            }
        ],
        'no-promise-executor-return': 'off',
        'no-proto': 'error',
        'no-restricted-exports': 'error',
        'no-restricted-globals': 'error',
        'no-restricted-imports': 'error',
        'no-restricted-properties': 'error',
        'no-restricted-syntax': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'off',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'off',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-ternary': 'off',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-underscore-dangle': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'off',
        'no-unreachable-loop': 'error',
        'no-unsafe-optional-chaining': 'error',
        'no-unused-expressions': 'error',
        'no-unused-vars': [
            'error',
            {
                'vars': 'all',
                'args': 'none',
                'ignoreRestSiblings': true
            }
        ],
        'no-use-before-define': 'error',
        'no-useless-backreference': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'off',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'off',
        'no-useless-return': 'off',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'error',
        'object-curly-newline': 'error',
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'object-shorthand': 'off',
        'one-var': 'off',
        'one-var-declaration-per-line': 'error',
        'operator-assignment': [
            'error',
            'always'
        ],
        'operator-linebreak': 'error',
        'padded-blocks': 'off',
        'padding-line-between-statements': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': 'off',
        'prefer-exponentiation-operator': 'error',
        'prefer-named-capture-group': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': 'off',
        'quotes': [
            'error',
            'single'
        ],
        'radix': [
            'error',
            'as-needed'
        ],
        'require-atomic-updates': 'error',
        'require-await': 'off',
        'require-unicode-regexp': 'off',
        'rest-spread-spacing': [
            'error',
            'never'
        ],
        'semi': 'error',
        'semi-spacing': [
            'error',
            {
                'after': true,
                'before': false
            }
        ],
        'semi-style': [
            'error',
            'last'
        ],
        'sort-imports': 'error',
        'sort-keys': 'off',
        'sort-vars': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': 'off',
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-infix-ops': 'off',
        'space-unary-ops': [
            'error',
            {
                'nonwords': false,
                'words': true
            }
        ],
        'spaced-comment': 'off',
        'strict': 'error',
        'switch-colon-spacing': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': [
            'error',
            'never'
        ],
        'template-tag-spacing': 'error',
        'unicode-bom': [
            'error',
            'never'
        ],
        'vars-on-top': 'error',
        'wrap-iife': 'error',
        'wrap-regex': 'error',
        'yield-star-spacing': 'error',
        'yoda': [
            'error',
            'never'
        ]
    }
};
