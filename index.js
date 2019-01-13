const config = {
    env: { es6: true },

    plugins: ['unicorn'],

    extends: [
        'airbnb-base',
        'plugin:unicorn/recommended'
    ],

    rules: {
        'array-bracket-newline': ['error', 'consistent'],
        'arrow-body-style': 'off',
        'capitalized-comments': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        'func-names': 'off',
        'func-style': ['error', 'declaration'],
        indent: [
            'error', 4,
            { SwitchCase: 0 }
        ],
        'line-comment-position': 'off',
        'max-len': [
            'warn', 80, {
                tabWidth: 4,
                ignoreStrings: true,
                ignoreRegExpLiterals: true,
                ignoreUrls: true
            }
        ],
        'multiline-ternary': 'off',
        'no-continue': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-restricted-syntax': [
            'error',
            'ForInStatement', 'LabeledStatement', 'WithStatement'
        ],
        'no-self-assign': ['error', {
            props: true
        }],
        'no-ternary': 'warn',
        'no-underscore-dangle': ['warn', {
            allowAfterThis: true
        }],
        'no-use-before-define': 'off',
        strict: ['error', 'global'],
        'unicorn/no-process-exit': 'off' // Duplicate of no-process-exit
    }
};

module.exports = config;
