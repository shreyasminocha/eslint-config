const config = {
    extends: 'airbnb-base',

    rules: {
        indent: [
            'error', 4,
            { SwitchCase: 0 }
        ],
        'no-use-before-define': ['error', {
            functions: true,
            classes: true,
            variables: false
        }],
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
            ignoreUrls: true
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
        'prefer-object-spread': 'error',
        'comma-dangle': ['error', 'never']
    }
};

module.exports = config;
