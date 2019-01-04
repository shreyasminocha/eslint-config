const config = {
    env: { es6: true },

    plugins: [
        'eslint-comments',
        'unicorn'
    ],

    extends: [
        'airbnb-base',
        'plugin:unicorn/recommended',
        'plugin:eslint-comments/recommended',
        './browser.js',
        './node.js'
    ],

    rules: {
        indent: [
            'error', 4,
            { SwitchCase: 0 }
        ],
        'no-use-before-define': 'off',
        'no-plus-plus': 'off',
        'arrow-body-style': 'off',
        'no-param-reassign': 'off',
        'no-self-assign': ['error', {
            props: true
        }],
        strict: ['error', 'global'],
        'array-bracket-newline': ['error', 'consistent'],
        'func-names': 'off',
        'func-style': ['error', 'declaration'],
        'capitalized-comments': ['error', 'always'],
        'line-comment-position': 'off',
        'max-len': ['warn', 80, {
            tabWidth: 4,
            ignoreUrls: true,
            ignoreStrings: true
        }],
        'multiline-ternary': 'off',
        'no-restricted-syntax': [
            'error',
            'ForInStatement', 'LabeledStatement', 'WithStatement'
        ],
        'no-ternary': 'warn',
        'no-underscore-dangle': ['warn', {
            allowAfterThis: true
        }],
        'comma-dangle': ['error', 'never']
    }
};

module.exports = config;
